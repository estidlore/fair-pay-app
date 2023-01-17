import type { ReactNode } from "react";
import type { ViewProps } from "react-native";

interface CardProps extends Pick<ViewProps, "children" | "style"> {
  actionButtons?: ReactNode;
  header?: string;
}

export type { CardProps };
