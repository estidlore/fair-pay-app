import { colors } from "appStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  touchable: {
    borderColor: colors.light,
    borderRadius: 4,
    borderWidth: 2
  },
  text: {
    color: colors.light,
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8
  }
});

export { styles };
