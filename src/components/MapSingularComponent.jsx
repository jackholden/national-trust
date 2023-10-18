import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

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

export default function MapSingularComponent({ mapData }) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      style={styles.mapStyle}
      minZoomLevel={11}
      maxZoomLevel={12}
      region={{
        latitude: mapData.latitude,
        longitude: mapData.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <>
        <Marker
          pinColor="green"
          coordinate={{
            latitude: mapData.latitude,
            longitude: mapData.longitude,
          }}
        ></Marker>
      </>
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    marginVertical: 20,
    width: "100%",
    height: 200,
  },
});
