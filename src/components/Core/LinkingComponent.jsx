import { useCallback } from "react";
import { Linking, Text } from "react-native";
import ButtonComponent from "./ButtonComponent";

export const LinkingComponent = ({ url, children, customComponent }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <>
      {customComponent ? (
        <>{customComponent}</>
      ) : (
        <ButtonComponent text={children} onPress={handlePress} />
      )}
    </>
  );
};
