import type { FC } from "react";
import React, { useContext } from "react";
import { Text, View } from "react-native";

import { Card } from "components/Card";
import { TableContext } from "utils/contexts";
import { getSubtotalPrice, splitOrdersByApproval } from "utils/orders";

import { OrderItems } from "../OrderItems";
import { Order } from "./Order";
import { styles } from "./styles";

const Orders: FC = (): JSX.Element => {
  const { orders } = useContext(TableContext);

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
        ordersToApprove.map((order) => <Order {...order} key={order.id} />)
      )}
    </View>
  );
};

export { Orders };
