import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  actions: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16
  },
  container: {
    borderColor: colors.light,
    borderRadius: 4,
    borderWidth: 2,
    padding: 16
  },
  header: {
    fontSize: 20
  }
});

export { styles };
