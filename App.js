import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import useFirstLaunch from "./src/hooks/useFirstLaunch";
import useGetResources from "./src/hooks/useGetResources";

import HeadingComponent from "./src/components/Core/HeadingComponent";

import AppContainer from "./src/screens/containers/AppContainer";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const isAsyncComplete = useGetResources();
  const { firstScreen, loading } = useFirstLaunch();

  // are initial checks completed?
  if (!isAsyncComplete || loading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, flexGrow: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={firstScreen}>
          <Stack.Screen
            name="App"
            component={AppContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route }) => ({
              headerShadowVisible: false,
              headerTitle: (props) => (
                <HeadingComponent
                  title={`Visit ${route.params.name}`}
                  details={true}
                  {...props}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
