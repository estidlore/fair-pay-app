import { StyleSheet } from "react-native";

const colors = {
  dark: "#202830",
  gray: "#788088",
  light: "#d0d8e0"
};

const appStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.dark,
    height: "100%",
    padding: 16,
    width: "100%"
  }
});

export { appStyles, colors };
