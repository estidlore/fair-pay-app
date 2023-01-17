import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addButton: {
    alignSelf: "flex-end"
  },
  container: {
    borderTopColor: colors.light,
    borderTopWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    paddingVertical: 8
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
