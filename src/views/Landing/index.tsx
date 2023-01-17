import { Picker } from "@react-native-picker/picker";
import type { FC } from "react";
import React, { useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";

import { Button } from "components/Button";
import type { Order } from "types";
import { fetchApi } from "utils/api";
import { TableContext } from "utils/contexts";
import { useArrayReducer } from "utils/hooks/arrayReducer";

import { styles } from "./styles";
import { TakeOrder } from "./TakeOrder";

const Landing: FC = (): JSX.Element => {
  const [table, setTable] = useState(1);
  const [tables, setTables] = useState<number[]>([]);
  const [orders, addOrder, , editOrder] = useArrayReducer<Order>([]);
  const [takingOrder, toggleTakingOrder] = useReducer((val) => !val, false);

  useEffect(() => {
    fetchApi("tables")
      .then(async (res) => res.json())
      .then((data: number[]) => {
        setTables(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setTables]);

  return (
    <View>
      <TableContext.Provider
        value={{
          addOrder,
          editOrder,
          orders
        }}
      >
        <Text style={[styles.header]}>{"Fair Pay"}</Text>
        <View style={[styles.tableSelect]}>
          <Text style={[styles.tableLabel]}>{"Table"}</Text>
          <Picker
            onValueChange={setTable}
            selectedValue={table}
            style={[styles.tablePicker]}
          >
            {tables.map((table) => (
              <Picker.Item key={table} label={`${table}`} value={table} />
            ))}
          </Picker>
        </View>
        {takingOrder ? (
          <TakeOrder onCancel={toggleTakingOrder} />
        ) : (
          <Button onPress={toggleTakingOrder}>{"Add order"}</Button>
        )}
      </TableContext.Provider>
    </View>
  );
};

export { Landing, TableContext };
