import type { TextProps, TouchableOpacityProps } from "react-native";

type ButtonProps = Pick<TouchableOpacityProps, "disabled" | "onPress"> &
  Pick<TextProps, "children">;

export type { ButtonProps };
