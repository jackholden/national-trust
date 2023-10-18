import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import ButtonComponent from "../components/Core/ButtonComponent";
import TagComponent from "../components/Core/TagComponent";
import ItemCard from "../components/ItemCard";
import SearchInputComponent from "../components/SearchInputComponent";

import json from "../data.json";

export default function SearchScreen({ route, navigation }) {
  const data = Object.values(json);

  const [searchText, setSearchText] = useState("");
  //const [places, setPlaces] = useState(data);
  const [places, setPlaces] = useState(data);

  // renderItem w/ card component
  const renderItem = ({ item }) => {
    return (
      <ItemCard
        item={item}
        onPress={() =>
          navigation.navigate("Details", {
            screen: "Details",
            name: item.title,
            data: item,
          })
        }
      />
    );
  };

  // if not data found in search
  const returnEmpty = () => {
    return <Text>No places found :(</Text>;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={styles.container}>
        {/* <SearchInputComponent /> */}
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={25} color="black" />
          <TextInput
            defaultValue={searchText}
            style={styles.input}
            placeholder="Search National Trust Places..."
            textContentType="name"
            placeholderTextColor="#000"
            onChangeText={(text) => {
              setSearchText(text);
              if (text === "") {
                return setPlaces(data);
              }
              const filtered_places = places.filter((places) =>
                places.title.toLowerCase().startsWith(text.toLowerCase())
              );
              setPlaces(filtered_places);
            }}
            returnKeyType="search"
          />
        </View>
        <FlatList
          data={places}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={returnEmpty}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    padding: 15,
    // justifyContent: "center",
  },
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
  inputContainer: {
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 16,
    marginBottom: 16,
    paddingStart: 20,
    width: "100%",
    backgroundColor: "white",
  },
  input: {
    height: 55,
    padding: 20,
    fontFamily: "NationalTrust",
  },
});
