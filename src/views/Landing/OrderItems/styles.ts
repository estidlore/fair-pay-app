import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  column: {
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 1
  },
  container: {
    borderBottomColor: colors.light,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingBottom: 8
  },
  element: {
    fontSize: 16,
    marginVertical: 4
  },
  fallback: {
    width: "100%"
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4
  }
});

export { styles };
