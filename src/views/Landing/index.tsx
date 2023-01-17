import { Picker } from "@react-native-picker/picker";
import type { FC } from "react";
import React, { createContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { fetchApi } from "utils/api";
import { useArrayReducer } from "utils/hooks/arrayReducer";

import { styles } from "./styles";
import type { TableContextValue } from "./types";

const tableInitialValue: TableContextValue = {
  orders: []
};

const TableContext = createContext(tableInitialValue);

const Landing: FC = (): JSX.Element => {
  const [table, setTable] = useState(1);
  const [tables, setTables] = useState<number[]>([]);
  const [orders, addOrder, deleteOrder, editOrder] = useArrayReducer(
    tableInitialValue.orders
  );

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
          deleteOrder,
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
      </TableContext.Provider>
    </View>
  );
};

export { Landing, TableContext };
