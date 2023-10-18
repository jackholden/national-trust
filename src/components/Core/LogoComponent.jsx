import { StyleSheet, Image } from "react-native";

export default function LogoComponent() {
  return (
    <Image
      style={styles.tinyLogo}
      source={require("../../assets/NT/NT-leaf-green.png")}
    />
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 45,
    height: 45,
  },
});
