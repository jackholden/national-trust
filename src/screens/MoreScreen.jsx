import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getGreeting } from "../utils/getGreeting";
import ButtonComponent from "../components/Core/ButtonComponent";
import { LinkingComponent } from "../components/Core/LinkingComponent";
import GapComponent from "../components/Core/GapComponent";

const Links = [
  {
    href: "https://www.nationaltrust.org.uk/who-we-are/about-u",
    name: "About",
  },
  {
    href: "https://shop.nationaltrust.org.uk/",
    name: "Shop",
  },
];

export default function MoreScreen({ route, navigation }) {
  // clear async storage (reset onboarding)
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      alert("App Storage successfully cleared :)");
    } catch (e) {
      alert("Failed to clear the app storage :(");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
        <Text style={styles.description}>Discover even more!</Text>
      </View>
      <View style={styles.main}>
        {/* {Links.map((page) => (
          <LinkingComponent key={page.href} url={page.href}>
            <ButtonComponent />
          </LinkingComponent>
        ))} */}
        <GapComponent />
        <ButtonComponent
          text="Clear Storage"
          backgroundColor="#007a3b"
          onPress={clearStorage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
  },
  greeting: {
    fontSize: 35,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "NationalTrust",
  },
  description: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "NationalTrust",
  },
  main: {
    paddingHorizontal: 20,
  },
});
