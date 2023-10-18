import { StyleSheet, Text, View, Dimensions } from "react-native";
import ButtonComponent from "../Core/ButtonComponent";

const { width } = Dimensions.get("window");

export default function OnboardingStep(props) {
  const {
    onPress,
    title = "Placeholder",
    description = "Placeholder description",
    btnText = "Ok!",
    children,
  } = props;
  return (
    <View style={styles.child}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children}
      <ButtonComponent text={btnText} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  child: {
    width,
    backgroundColor: "#007a3b",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: width * 0.1,
    fontFamily: "NationalTrust",
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
  description: {
    fontSize: width * 0.05,
    fontFamily: "NationalTrust",
    textAlign: "center",
    color: "white",
    marginBottom: 30,
    maxWidth: width / 1.5,
  },
});
