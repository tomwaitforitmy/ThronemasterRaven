import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FillDummyData } from "../data/DummyData";
import GameListItem from "./GameListItem";

const GameList = (props) => {
  console.log("After: gameList State initialized");
  const games = FillDummyData();

  const renderGameItem = (itemData) => {
    return <GameListItem game={itemData} />;
  };

  return (
    <View style={styles.screen}>
      <Text style={{ color: "#333", fontSize: 24 }}>{"Your games"}</Text>
      <FlatList data={games} renderItem={renderGameItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  gameListStyle: {},
});

export default GameList;
