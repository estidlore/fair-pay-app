import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginBottom: 16
  },
  checkInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8
  },
  element: {
    fontSize: 16
  },
  formControl: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  header: {
    fontSize: 24,
    marginBottom: 6,
    marginTop: 12
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold"
  },
  tipInput: {
    marginRight: 16,
    width: 80
  },
  tipLabel: {
    fontSize: 16,
    marginRight: 8
  }
});

export { styles };
