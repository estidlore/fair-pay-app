import type { FC } from "react";
import React, { Fragment, useCallback, useContext, useState } from "react";
import { Text, View } from "react-native";

import { Button } from "components/Button";
import { Card } from "components/Card";
import { Input } from "components/Input";
import type { Order as OrderProps } from "types";
import { TableContext } from "utils/contexts";

import { OrderItems } from "../OrderItems";
import { styles } from "./styles";

const Order: FC<OrderProps> = ({ customer, id, items }) => {
  const { editOrder } = useContext(TableContext);
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
};

export { Order };
