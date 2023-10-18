import { Text, View, StyleSheet } from "react-native";
import LogoComponent from "./LogoComponent";

export default function HeadingComponent({ title = null, details = false }) {
  return (
    <View
      style={[
        styles.container,
        {
          marginStart: details ? "-25%" : null,
          justifyContent: details ? "center" : null,
        },
      ]}
    >
      <LogoComponent />
      <Text style={styles.heading}>{title ? title : "National Trust"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    marginStart: 15,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "NationalTrust",
  },
});
