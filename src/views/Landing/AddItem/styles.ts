import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row"
  },
  formControl: {
    display: "flex",
    flexBasis: 0,
    flexDirection: "column",
    flexGrow: 1,
    marginRight: 8
  },
  label: {
    marginBottom: 4
  }
});

export { styles };
