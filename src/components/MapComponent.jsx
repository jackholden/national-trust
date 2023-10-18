import { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Callout,
  CalloutSubview,
} from "react-native-maps";
import * as Location from "expo-location";

const mapStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default function MapComponent({ mapData, navigation, userLocation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log(errorMsg);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location.coords);
    })();
  }, []);

  // if (!location) {
  //   return (
  //     <>
  //       <ActivityIndicator size="large" color="#007a3b" />
  //       <Text>Just fetching our places...</Text>
  //     </>
  //   );
  // }

  return (
    <View style={styles.screen}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.mapStyle}
        minZoomLevel={6}
        maxZoomLevel={12}
        showsUserLocation={userLocation && true}
        loadingEnabled={true}
        region={
          location
            ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: 50.8119,
                longitude: -2.0335,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
      >
        <>
          {mapData.map((i) => (
            <Marker
              key={i.id}
              pinColor="green"
              coordinate={{
                latitude: i.location.latitude,
                longitude: i.location.longitude,
              }}
              title={i.title}
              onPress={() =>
                navigation.navigate("Details", {
                  screen: "Details",
                  name: i.title,
                  data: i,
                })
              }
            >
              {/* <Callout
                tooltip
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  backgroundColor: "white",
                  padding: 20,
                  paddingRight: 25,
                }}
              >
                <Text>{i.title}</Text>
                <Text>{i.description}</Text>
              </Callout> */}
            </Marker>
          ))}
        </>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  callOutText: {
    fontSize: 15,
  },
});
