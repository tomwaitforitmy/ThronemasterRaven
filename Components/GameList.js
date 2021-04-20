import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { FillDummyData } from "../DummyData";
import GameListItem from "./GameListItem";

const GameList = (props) => {
  const [gameList, setGameList] = useState([]);
  console.log("After: gameList State initialized");

  const onShowGames = () => {
    console.log("onShowGames call");
    setGameList(FillDummyData());
  };

  return (
    <View style={styles.screen}>
      <Text style={{ color: "#333", fontSize: 24 }}>{"Your games"}</Text>
      <ScrollView>
        {gameList.map((game) => {
          return <GameListItem game={game} key={game[2]} />;
        })}
      </ScrollView>
      <Button title="Show games" onPress={onShowGames} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  gameListStyle: {},
});

export default GameList;
