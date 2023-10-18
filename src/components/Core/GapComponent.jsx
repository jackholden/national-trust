import { View, StyleSheet } from "react-native";

export default function GapComponent(dir = null) {
  return <View style={dir ? styles.horizontal : styles.vertical} />;
}

const styles = StyleSheet.create({
  horizontal: {
    marginHorizontal: 5,
  },
  vertical: {
    marginVertical: 5,
  },
});
