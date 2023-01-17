import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12
  },
  tableLabel: {
    fontSize: 16,
    marginRight: 16
  },
  tablePicker: {
    width: 100
  },
  tableSelect: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  takeOrder: {
    borderTopColor: colors.light,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 16
  }
});

export { styles };
