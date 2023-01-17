import type { TextInputProps } from "react-native";

type InputProps = Pick<
  TextInputProps,
  "keyboardType" | "onChangeText" | "placeholder" | "style" | "value"
>;

export type { InputProps };
