import { SafeAreaView, StyleSheet } from "react-native";

import MapComponent from "../components/MapComponent";

import json from "../data.json";

export default function DiscoverScreen({ navigation }) {
  const data = Object.values(json);

  return (
    <SafeAreaView style={styles.container}>
      <MapComponent
        mapData={data}
        navigation={navigation}
        userLocation={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
