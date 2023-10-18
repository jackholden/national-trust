import { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import OnboardingStep from "../components/Onboarding/OnboardingStep";
import OnboardingPagination from "../components/Onboarding/OnboardingPagination";

export default function OnboardingScreen({ route, navigation }) {
  const image = {
    uri: "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/suffolk/places/dunwich-heath-and-beach/library/dunwich-heath-and-beach-suffolk-1206864.jpg",
  };

  // keep track of current scroll index and allow custom Next btn function to work
  const scrollRef = useRef(null);
  const getCurrentIndex = () => {
    const currentIndex = scrollRef.current?.getCurrentIndex();
    scrollRef.current?.scrollToIndex({ index: currentIndex + 1 });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={{ opacity: 0 }} />
        <View style={styles.topFlex}>
          <Image
            style={styles.tinyLogo}
            resizeMode="contain"
            source={require("../assets/NT/NT-logo-white.png")}
          />
        </View>
        <View style={{ flex: 3 }}>
          <SwiperFlatList
            //showPagination
            PaginationComponent={OnboardingPagination}
            ref={scrollRef}
          >
            <OnboardingStep
              title="Discover whatever, whenever!"
              description="Browse National Trust places even when offline"
              btnText="Next"
              onPress={getCurrentIndex}
            />
            <OnboardingStep
              title="See what's on!"
              description="Explore upcoming events"
              btnText="Next"
              onPress={getCurrentIndex}
            />
            <OnboardingStep
              title="Permissions"
              description="To get the best possible app experience, allow location"
              btnText="Allow"
              onPress={() => navigation.navigate("App", { screen: "Discover" })}
            />
          </SwiperFlatList>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  topFlex: {
    flex: "4",
    backgroundColor: "transparent",
  },
  image: {
    display: "flex",
    ...StyleSheet.absoluteFillObject,
  },
  tinyLogo: {
    width: 250,
    height: 150,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
});
