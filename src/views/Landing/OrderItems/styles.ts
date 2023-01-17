import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  element: {
    fontSize: 16,
    marginVertical: 4,
    width: "25%"
  },
  fallback: {
    fontSize: 16,
    marginVertical: 4
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    width: "25%"
  }
});

export { styles };
