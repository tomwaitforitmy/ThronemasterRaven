import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
//import { fillDummyData } from "file";

export default function App() {
  const [gameList, setGameList] = useState([]);

  const fillDummyData = () => {
    var dummyData = [
      ["tom", "https://game.thronemaster.net/images/houseS.gif", "1"],
      ["necrach", "https://game.thronemaster.net/images/houseB.gif", "2"],
      ["We_Do_Not_Sow", "https://game.thronemaster.net/images/houseG.gif", "3"],
      ["Ser Hodor", "https://game.thronemaster.net/images/houseL.gif", "4"],
    ];
    return dummyData;
  };

  const onShowGames = () => {
    var dummies = fillDummyData();
    setGameList((currentGames) => dummies);
  };

  console.log("Raven Start");

  return (
    <View style={styles.screen}>
      <Text style={{ color: "#333", fontSize: 24 }}>{"Your games"}</Text>
      <ScrollView>
        {gameList.map((game) => {
          return (
            <View key={game[2]} style={styles.gameListItem}>
              <Image
                style={styles.houseLogo}
                source={{
                  uri: game[1],
                }}
              />
              <Text>{game[0]}</Text>
              <Button title="Details" onPress={() => console.log(game[2])} />
            </View>
          );
        })}
      </ScrollView>

      <Button title="Login" onPress={onShowGames} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    backgroundColor: "grey",
    alignItems: "flex-start",
    justifyContent: "space-between",
    //width: "80%",
  },
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
  gameListStyle: {},
});
