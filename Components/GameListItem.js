import React from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";
import { getHouseSigil, houses } from "../data/Houses";
import Game from "../models/Game";

const GameListItem = (props) => {
  console.log(props.game);
  const game = props.game;

  return (
    <View style={styles.gameListItem}>
      <Text>DummyText</Text>
      {/* <Image
        style={styles.houseLogo}
        source={{
          uri: getHouseSigil(game.yourHouse),
        }}
      />
      <Text>{game.name}</Text>
      <Text>{game.nextPlayer}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // houseLogo: {
  //   width: 25,
  //   height: 25,
  // },
  // gameListItem: {
  //   backgroundColor: "#ccc",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  //   padding: 10,
  //   borderColor: "black",
  //   borderWidth: 1,
  //   margin: 10,
  // },
});

export default GameListItem;
