import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useFirstLaunch() {
  const [firstScreen, setFirstScreen] = useState("");
  const [loading, setLoading] = useState(true);

  async function checkFirstLaunch() {
    AsyncStorage.getItem("launchCheck")
      .then((data) => {
        console.log(data);
        setFirstScreen(data === "positive" ? "App" : "Onboarding");
        AsyncStorage.setItem("launchCheck", "positive");
        setLoading(false);
      })
      .catch((e) => {
        console.warn(e);
        setLoading(false);
        setFirstScreen("Onboarding");
      });
  }

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  return {
    firstScreen: firstScreen,
    loading: loading,
  };
}
