import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent(props) {
  const {
    onPress,
    text = "Placeholder",
    size,
    backgroundColor,
    textColor,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 10,
          elevation: 6,
          width: 100,
        },
        backgroundColor && { backgroundColor },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          size === "sm" && { fontSize: 14 },
          textColor && { color: textColor },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "NationalTrust",
  },
});
