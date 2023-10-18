import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useGetResources() {
  const [isAsyncComplete, setAsyncComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          NationalTrust: require("../assets/NT/nationaltrusttt-regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAsyncComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAsync();
  }, []);

  return isAsyncComplete;
}
