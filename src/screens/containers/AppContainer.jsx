import { StyleSheet } from "react-native";
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
import { Ionicons } from "@expo/vector-icons";

import HeadingComponent from "../../components/Core/HeadingComponent";

import DiscoverScreen from "../DiscoverScreen";
import SearchScreen from "../SearchScreen";
import MoreScreen from "../MoreScreen";

const Tab = createBottomTabNavigator();

export default function AppContainer() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={({ route }) => ({
        headerStyle: {
          height: 110,
        },
        headerTitle: (props) => <HeadingComponent {...props} />,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveBackgroundColor: "#007a3b",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "NationalTrust",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Discover") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "More") {
            iconName = focused
              ? "ellipsis-horizontal"
              : "ellipsis-horizontal-outline";
          }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen
        name="Explore"
        component={SearchScreen}
        options={{
          headerTitle: (props) => (
            <HeadingComponent title="Explore" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerTitle: (props) => <HeadingComponent title="More" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50px",
    borderTopWidth: 0,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    bottom: 20,
    right: 15,
    left: 15,
    height: 70,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  tabBarItemStyle: {
    margin: 0,
    paddingBottom: 6,
    height: "100%",
    borderRadius: 50,
  },
});
