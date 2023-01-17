import { colors } from "appStyles";
import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";
import type { InputProps } from "./types";

const Input: FC<InputProps> = ({
  keyboardType,
  onChangeText,
  placeholder,
  style,
  value = ""
}: InputProps): JSX.Element => {
  const [controlledValue, setControlledValue] = useState(value);

  const handleChange = useCallback(
    (newValue: string) => {
      onChangeText?.(newValue);
      setControlledValue(newValue);
    },
    [onChangeText, setControlledValue]
  );

  return (
    <TextInput
      keyboardType={keyboardType}
      onChangeText={handleChange}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      style={[styles.input, style]}
      value={controlledValue}
    />
  );
};

export { Input };
