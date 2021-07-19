import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin, Signup, MainScreen, Background, Mypage, Test } from "../screens";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "pink", //터치시 배경
        activeTintColor: "black", //터치시 글자색
        inactiveTintColor: "black", //비터치시 글자색
        style: {
          backgroundColor: "white", //기본 배경색
        },
        labelPosition: "below-icon",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == "MainScreen") {
            iconName = "md-home-outline";
          } else if (route.name == "Instagram") {
            iconName = "logo-instagram";
          } else if (route.name == "MyPage") {
            iconName = "ios-person-circle-outline";
          }
          return <Ionicons name={iconName} size={24} color="black" />;
        },
      })}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarVisible: true,
        }}
      />
      <Tab.Screen name="MyPage" component={Mypage} />
      <Tab.Screen name="Instagram" component={Background} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="On the Line" component={MainTab} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="Background"
        component={Background}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("Upload")}
              title="Upload"
              color="#3778F5"
            />
          ),
        }}
      />
      <Stack.Screen name="Test" component={Test}/>
    </Stack.Navigator>
  );
};

export default Auth;
