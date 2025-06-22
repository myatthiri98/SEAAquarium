import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "@/screens/HomeScreen";
import WalletScreen from "@/screens/WalletScreen";
import MoreScreen from "@/screens/MoreScreen";
import { Colors } from "@/constants/colors";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.white,
              borderTopWidth: 1,
              borderTopColor: Colors.lightGray,
              paddingBottom: 10,
              paddingTop: 10,
              height: 80,
            },
            tabBarActiveTintColor: Colors.secondary,
            tabBarInactiveTintColor: Colors.gray,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "500",
            },
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: true,
            animation: "shift",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{ scale: focused ? 1.1 : 1.0 }],
                  }}
                >
                  <Image
                    source={require("../../assets/icons/Home.png")}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? Colors.secondary : Colors.gray,
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={WalletScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{ scale: focused ? 1.1 : 1.0 }],
                  }}
                >
                  <Image
                    source={require("../../assets/icons/Tickets.png")}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? Colors.secondary : Colors.gray,
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={MoreScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    transform: [{ scale: focused ? 1.1 : 1.0 }],
                  }}
                >
                  <Image
                    source={require("../../assets/icons/More.png")}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? Colors.secondary : Colors.gray,
                    }}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
