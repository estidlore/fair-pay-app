import { Picker } from "@react-native-picker/picker";
import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Text, ToastAndroid, View } from "react-native";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { validateGreaterOrEqual } from "utils/form/number";
import { isEmpty } from "utils/form/text";

import { styles } from "./styles";
import type { AddItemProps } from "./types";

const AddItem: FC<AddItemProps> = ({
  onAddItem,
  options
}: AddItemProps): JSX.Element | null => {
  if (options.length === 0) {
    return null;
  }

  const [id, setId] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (options.length > 0) {
      setId(options[0].id);
    }
  }, [options, setId]);

  const handleChangeQuantity = useCallback(
    (newValue: string) => {
      setQuantity(parseInt(newValue));
    },
    [setQuantity]
  );

  const handleAddItem = useCallback(() => {
    const quantityValidation = validateGreaterOrEqual(quantity, 0);
    if (!isEmpty(quantityValidation)) {
      ToastAndroid.show("Quantity " + quantityValidation, ToastAndroid.LONG);
      return;
    }
    const product = options.find((el) => el.id === id);
    if (product === undefined) {
      ToastAndroid.show("Product not found", ToastAndroid.LONG);
      return;
    }
    onAddItem({
      id,
      product,
      quantity
    });
  }, [id, onAddItem, options, quantity]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.formControl]}>
        <Text style={[styles.label]}>{"Product"}</Text>
        <Picker onValueChange={setId} selectedValue={id}>
          {options.map(({ id, name }) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>
      <View style={[styles.formControl]}>
        <Text style={[styles.formControl]}>{"Quantity"}</Text>
        <Input
          keyboardType={"numeric"}
          onChangeText={handleChangeQuantity}
          placeholder={"Quantity"}
          value={`${quantity}`}
        />
      </View>
      <Button onPress={handleAddItem}>{"+"}</Button>
    </View>
  );
};

export { AddItem };
