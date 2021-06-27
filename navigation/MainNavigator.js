import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import GamesScreen from "../screens/GamesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {},
  headerBackTitleStyle: {},
  headerTintColor: Colors.forth,
};

const GameScreenNavigator = createStackNavigator(
  {
    Games: GamesScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const SettingsScreenNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const myTabScreenConfig = {
  Games: {
    screen: GameScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="list" size={25} color={tabInfo.tintColor}></Ionicons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Settings: {
    screen: SettingsScreenNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="settings"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Colors.primary,
    },
  },
};

const TabNavigator = createMaterialBottomTabNavigator(myTabScreenConfig, {
  activeColor: Colors.forth,
  shifting: true,
});

export default createAppContainer(TabNavigator);
