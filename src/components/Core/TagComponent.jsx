import { StyleSheet, Text, Pressable } from "react-native";

export default function TagComponent(props) {
  const { text, size, backgroundColor, textColor } = props;
  return (
    <Pressable
      style={[
        styles.tag,
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
          styles.tagText,
          size === "sm" && { fontSize: 14 },
          textColor && { color: textColor },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 50,
    backgroundColor: "red",
  },
  tagText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "NationalTrust",
  },
});
