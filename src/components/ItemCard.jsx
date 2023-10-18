import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import TagComponent from "./Core/TagComponent";
import colours from "../utils/colours";

export default function ItemCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      {item.imageUrl && (
        <ImageBackground
          imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          source={{ url: item.imageUrl }}
          style={{
            width: "100%",
            height: 180,
          }}
          resizeMode="cover"
        >
          <View style={styles.tagPosition}>
            {item.openingTimeStatus && (
              <TagComponent
                text={item.openingTimeStatus}
                backgroundColor={
                  item.openingTimeStatus.includes("Open")
                    ? colours.tagOpen
                    : item.openingTimeStatus.includes("Partially")
                    ? colours.tagPartially
                    : colours.tagClosed
                }
              />
            )}
          </View>
        </ImageBackground>
      )}
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#007a3b",
    borderRadius: 10,
    padding: 0,
    marginVertical: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 5,
    fontFamily: "NationalTrust",
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
    fontFamily: "NationalTrust",
  },
  tagPosition: { position: "absolute", top: 10, right: 10 },
});
