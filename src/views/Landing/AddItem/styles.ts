import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "flex-end"
  },
  container: {
    display: "flex",
    flexDirection: "row"
  },
  formControl: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 8
  },
  label: {
    fontSize: 16
  },
  picker: {
    flexGrow: 1
  }
});

export { styles };
