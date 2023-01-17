import type { FC } from "react";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import type { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  onPress,
  style
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.touchable, style]}
    >
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

export { Button };
