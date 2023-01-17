import type { FC } from "react";
import React from "react";
import { Text, View } from "react-native";

import { getSubtotalPrice } from "utils/orders";

import { styles } from "./styles";
import type { OrderItemsProps } from "./types";

const OrderItems: FC<OrderItemsProps> = ({
  items
}: OrderItemsProps): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.column]}>
        <Text style={[styles.header]}>{"Product"}</Text>
        {items.map((item) => (
          <Text key={item.id} style={[styles.element]}>
            {item.product.name}
          </Text>
        ))}
        <Text style={[styles.header]}>{"Subtotal"}</Text>
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.header]}>{"U.P."}</Text>
        {items.map((item) => (
          <Text key={item.id} style={[styles.element]}>
            {item.product.price}
          </Text>
        ))}
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.header]}>{"Qty"}</Text>
        {items.map((item) => (
          <Text key={item.id} style={[styles.element]}>
            {item.quantity}
          </Text>
        ))}
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.header]}>{"Amount"}</Text>
        {items.map((item) => (
          <Text key={item.id} style={[styles.element]}>
            {item.product.price * item.quantity}
          </Text>
        ))}
        <Text style={[styles.element]}>{getSubtotalPrice(items)}</Text>
      </View>
      {items.length === 0 ? (
        <Text style={[styles.element, styles.fallback]}>
          {"There are not items to show"}
        </Text>
      ) : undefined}
    </View>
  );
};

export { OrderItems };
