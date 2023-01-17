import type { FC } from "react";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { Text, ToastAndroid, View } from "react-native";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import type { OrderItem, Product } from "types";
import { fetchApi } from "utils/api";
import { TableContext } from "utils/contexts";
import { isEmpty, validateEmpty } from "utils/form/text";
import { useArrayReducer } from "utils/hooks/arrayReducer";
import { getNonOrderedProducts } from "utils/orders";

import { AddItem } from "../AddItem";
import { OrderItems } from "../OrderItems";
import { styles } from "./styles";
import type { TakeOrderProps } from "./types";

const TakeOrder: FC<TakeOrderProps> = ({
  onCancel
}: TakeOrderProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productOptions, setProductOptions] = useState<Product[]>([]);
  const [items, addItem] = useArrayReducer<OrderItem>([]);

  const [customer, setCustomer] = useState("");

  const { addOrder, orders } = useContext(TableContext);

  useEffect(() => {
    const options = getNonOrderedProducts(products, items);
    setProductOptions(options);
  }, [items, products, setProductOptions]);

  useEffect(() => {
    fetchApi("products")
      .then(async (res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  const handleSave = useCallback(() => {
    const customerValidation = validateEmpty(customer);
    if (!isEmpty(customerValidation)) {
      ToastAndroid.show("Customer " + customerValidation, ToastAndroid.LONG);
      return;
    }
    const customerOldOrder = orders.findIndex(
      (order) => order.customer === customer
    );
    if (customerOldOrder !== -1) {
      ToastAndroid.show("Customer names cannot be repeated", ToastAndroid.LONG);
      return;
    }
    if (items.length === 0) {
      ToastAndroid.show("Order cannot be empty", ToastAndroid.LONG);
      return;
    }
    addOrder?.({
      approved: false,
      customer,
      id: orders.length + 1,
      items,
      tip: 0
    });
  }, [addOrder, customer, items, orders]);

  return (
    <Card
      actionButtons={
        <Fragment>
          <Button onPress={handleSave}>{"Save order"}</Button>
          <Button onPress={onCancel}>{"Cancel order"}</Button>
        </Fragment>
      }
      header={"Take an order"}
    >
      <View style={[styles.formControl]}>
        <Text style={[styles.label]}>{"Customer"}</Text>
        <Input
          onChangeText={setCustomer}
          placeholder={"John Doe"}
          style={[styles.input]}
          value={customer}
        />
      </View>
      <OrderItems items={items} />
      <AddItem onAddItem={addItem} options={productOptions} />
    </Card>
  );
};

export { TakeOrder };
