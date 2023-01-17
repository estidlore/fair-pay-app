import type { FC } from "react";
import React, { useCallback, useContext, useState } from "react";
import { Text, View } from "react-native";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import { TableContext } from "utils/contexts";
import { getSubtotalPrice, splitOrdersByApproval } from "utils/orders";

import { OrderItems } from "../OrderItems";
import { styles } from "./styles";

const Orders: FC = (): JSX.Element => {
  const { editOrder, orders } = useContext(TableContext);

  const [approvedOrders, ordersToApprove] = splitOrdersByApproval(orders);

  return (
    <View>
      <Text style={[styles.header]}>{"Checks"}</Text>
      {approvedOrders.length === 0 ? (
        <Text style={[styles.fallback]}>
          {"There are not checks currently"}
        </Text>
      ) : (
        approvedOrders.map(({ customer, id, items, tip }) => {
          const subTotal = getSubtotalPrice(items);

          return (
            <Card header={`${customer}'s check`} key={id}>
              <OrderItems items={items} />
              <View style={[styles.checkInfo]}>
                <Text style={[styles.subheading]}>{"Tip"}</Text>
                <Text style={[styles.element]}>{tip}</Text>
                <Text style={[styles.subheading]}>{"Total"}</Text>
                <Text style={[styles.element]}>{subTotal + tip}</Text>
              </View>
            </Card>
          );
        })
      )}
      <Text style={[styles.header]}>{"Orders"}</Text>
      {ordersToApprove.length === 0 ? (
        <Text style={[styles.fallback]}>
          {"There are not orders currently"}
        </Text>
      ) : (
        ordersToApprove.map(({ customer, id, items }) => {
          const [tip, setTip] = useState(0);

          const handleTipChange = useCallback(
            (newValue: string) => {
              setTip(parseInt(newValue));
            },
            [setTip]
          );

          const handleApprove = useCallback(() => {
            editOrder?.({
              approved: true,
              customer,
              id,
              items,
              tip
            });
          }, [customer, editOrder, id, items, tip]);

          return (
            <Card
              actionButtons={
                <Button onPress={handleApprove}>{"Generate check"}</Button>
              }
              header={`${customer}'s order`}
              key={id}
            >
              <OrderItems items={items} />
              <View style={[styles.formControl]}>
                <Text style={[styles.tipLabel]}>{"Tip"}</Text>
                <Input
                  keyboardType={"numeric"}
                  onChangeText={handleTipChange}
                  placeholder={"10 000"}
                  value={`${tip}`}
                />
              </View>
            </Card>
          );
        })
      )}
    </View>
  );
};

export { Orders };
