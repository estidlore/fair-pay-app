import type { FC } from "react";
import React, { Fragment } from "react";
import { Text, View } from "react-native";

import { getSubtotalPrice } from "utils/orders";

import { styles } from "./styles";
import type { OrderItemsProps } from "./types";

const OrderItems: FC<OrderItemsProps> = ({
  items
}: OrderItemsProps): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.header]}>{"Product"}</Text>
      <Text style={[styles.header]}>{"Unit price"}</Text>
      <Text style={[styles.header]}>{"Quantity"}</Text>
      <Text style={[styles.header]}>{"Total price"}</Text>
      {items.length === 0 ? (
        <Text style={[styles.fallback]}>{"There are not items to show"}</Text>
      ) : (
        <Fragment>
          {items.map(({ id, product, quantity }) => (
            <Fragment key={id}>
              <Text style={[styles.element]}>{product.name}</Text>
              <Text style={[styles.element]}>{product.price}</Text>
              <Text style={[styles.element]}>{quantity}</Text>
              <Text style={[styles.element]}>{product.price * quantity}</Text>
            </Fragment>
          ))}
          <Text style={[styles.header]}>{"Subtotal"}</Text>
          <Text style={[styles.element]}>{getSubtotalPrice(items)}</Text>
        </Fragment>
      )}
    </View>
  );
};

export { OrderItems };
