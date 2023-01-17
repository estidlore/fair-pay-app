import type { FC } from "react";
import React, { Fragment, useCallback, useContext, useState } from "react";
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
        <Text style={[styles.element]}>{"There are not checks currently"}</Text>
      ) : (
        approvedOrders.map(({ customer, id, items, tip }) => {
          const subTotal = getSubtotalPrice(items);

          return (
            <Card header={`${customer}'s check`} key={id} style={[styles.card]}>
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
        <Text style={[styles.element]}>{"There are not orders currently"}</Text>
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
                <Fragment>
                  <View style={[styles.formControl]}>
                    <Text style={[styles.tipLabel]}>{"Tip"}</Text>
                    <Input
                      keyboardType={"numeric"}
                      onChangeText={handleTipChange}
                      placeholder={"10 000"}
                      style={[styles.tipInput]}
                      value={`${tip}`}
                    />
                  </View>
                  <Button onPress={handleApprove}>{"Generate check"}</Button>
                </Fragment>
              }
              header={`${customer}'s order`}
              key={id}
              style={[styles.card]}
            >
              <OrderItems items={items} />
            </Card>
          );
        })
      )}
    </View>
  );
};

export { Orders };
