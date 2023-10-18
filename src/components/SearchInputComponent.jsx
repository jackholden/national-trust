import { Ionicons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchInputComponent({ callback }) {
  // return (
  //   <View style={styles.inputContainer}>
  //     <Ionicons name="search" size={25} color="black" />
  //     <TextInput
  //       style={styles.input}
  //       onChangeText={(text) => filtrationSearch(text)}
  //       placeholder="Search National Trust Places..."
  //       keyboardType="default"
  //       placeholderTextColor="#000"
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
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
