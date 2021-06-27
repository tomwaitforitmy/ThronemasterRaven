import React from "react";
import Colors from "../constants/Colors";
import { StyleSheet, View, Text } from "react-native";
import GameList from "../components/GameList";

const GamesScreen = (props) => {
  return <GameList />;
};

GamesScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Shop",
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

export default GamesScreen;
