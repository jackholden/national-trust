import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import GapComponent from "../components/Core/GapComponent";
import { LinkingComponent } from "../components/Core/LinkingComponent";
import TagComponent from "../components/Core/TagComponent";
import MapSingularComponent from "../components/MapSingularComponent";

import colours from "../utils/colours";

const API_KEY = "7822aba1bab1a896fe1551b7a705c906";

export default function DetailsScreen({ route, navigation }) {
  const { name, data } = route.params;

  if (!data) return null;

  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  function fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemperature(data.main.temp);
        setCondition(data.weather[0].main);
      });
  }
  useEffect(() => {
    async function getData() {
      try {
        fetchWeather(data?.location.latitude, data?.location.longitude);
      } catch (e) {
        console.warn(e);
      }
    }
    getData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ paddingTop: 10, backgroundColor: "#fff" }} />
      <ScrollView>
        <Image
          source={{ url: data.imageUrl }}
          style={{
            width: "100%",
            height: 280,
          }}
          resizeMode="cover"
        />
        <View style={{ padding: 10, display: "flex", alignItems: "start" }}>
          {data.subTitle && (
            <Text style={styles.placeSubTitle}>{data.subTitle}</Text>
          )}
          <Text style={styles.placeTitle}>{name}</Text>
          <Text style={styles.placeDesc}>{data.description}</Text>
          {data.openingTimeStatus && (
            <TagComponent
              text={data.openingTimeStatus}
              backgroundColor={
                data.openingTimeStatus.includes("Open")
                  ? colours.tagOpen
                  : data.openingTimeStatus.includes("Partially")
                  ? colours.tagPartially
                  : colours.tagClosed
              }
            />
          )}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <LinkingComponent url={data.websiteUrl} style={{ marginRight: 10 }}>
              Website
            </LinkingComponent>
            <GapComponent />
            <LinkingComponent url="tel:+440344 800 1895">
              Call us
            </LinkingComponent>
          </View>
          {data.location && <MapSingularComponent mapData={data.location} />}
          {data.location && (
            <View>
              <Ionicons name="cloud" size={25} color="black" />
              <Text style={{ fontSize: 20, fontFamily: "NationalTrust" }}>
                {temperature} {"\u00B0"}C {condition}
              </Text>
            </View>
          )}
          {/* <Text>{JSON.stringify(data, null, 4)}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
  },
  placeTitle: {
    fontSize: 45,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "NationalTrust",
    backgroundColor: "#007a3b",
    marginTop: 15,
    marginBottom: 15,
  },
  placeSubTitle: {
    fontSize: 15,
    color: "#000",
    marginTop: 25,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "NationalTrust",
  },
  placeDesc: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "NationalTrust",
    marginBottom: 20,
  },
});
