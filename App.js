import { Image, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";



import HomePage from "./Component/Homepage/HomePage";
import Page1 from "./Component/Page1/Page1";
import Page2 from "./Component/Page2/Page2";


const Tab = createMaterialTopTabNavigator();


function App() {
  return (
    <NavigationContainer style={stylesApp.body}>
      <Tab.Navigator
        tabBarPosition={"bottom"}
        screenOptions={{
          tabBarShowIcon : true,
          tabBarShowLabel : false,
          tabBarPressColor : "red",
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "3D5A6C",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`./assets/accueil.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "red" : "red"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Informations"
          component={Page1}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`./assets/iconsinfo.png`)}
                  style={{ width: 30, height: 20 }}
                  tintColor={focused ? "red" : "red"}
                />
              );
            },
          }}
        />
        
        <Tab.Screen
          name="Settings"
          component={Page2}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require(`./assets/iconsparametres.png`)}
                  style={{ width: 20, height: 20 }}
                  tintColor={focused ? "red" : "red"}
                />
              );
            },
          }}
        />


       
      



      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const stylesApp = StyleSheet.create({
  body: {
    
  },
});
