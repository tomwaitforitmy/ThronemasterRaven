import React from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";

const GameListItem = (props) => {
  console.log(props.game);
  return (
    <View style={styles.gameListItem}>
      <Image
        style={styles.houseLogo}
        source={{
          uri: props.game[1],
        }}
      />
      <Text>{props.game[0]}</Text>
      <Button title="Details" onPress={() => console.log(props.game[2])} />
    </View>
  );
};

const styles = StyleSheet.create({
  houseLogo: {
    width: 25,
    height: 25,
  },
  gameListItem: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default GameListItem;
