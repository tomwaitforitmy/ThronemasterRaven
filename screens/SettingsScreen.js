import React from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text } from "react-native";

const SettingsScreen = (props) => {
  // return <GameList navigation={props.navigation} />;
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

SettingsScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Settings",
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  };
};

const styles = StyleSheet.create({
  dummyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
