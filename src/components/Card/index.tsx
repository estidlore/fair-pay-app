import type { FC } from "react";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import type { CardProps } from "./types";

const Card: FC<CardProps> = ({
  actionButtons,
  children,
  header,
  style
}: CardProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      {header !== undefined && <Text style={[styles.header]}>{header}</Text>}
      {children}
      <View style={[styles.actions]}>{actionButtons}</View>
    </View>
  );
};

export { Card };
