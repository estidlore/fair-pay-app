import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: colors.light,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 7
  },
  touchable: {
    borderColor: colors.light,
    borderRadius: 4,
    borderWidth: 2
  }
});

export { styles };
