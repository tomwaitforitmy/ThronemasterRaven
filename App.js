import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  console.log("Raven Start");
  return (
    <View style={styles.screen}>
      <Text style={{ color: "#333", fontSize: 24 }}>{"Your games"}</Text>
      <View style={styles.gameListItem}>
        <Image
          style={styles.houseLogo}
          source={{ uri: "https://game.thronemaster.net/images/houseS.gif" }}
        />
        <Text>{"tomwaitforitmy"}</Text>
        <Button title="Details" onPress={() => console.log("Button pressed")} />
      </View>
      <View style={styles.gameListItem}>
        <Image
          style={styles.houseLogo}
          source={{
            uri: "https://game.thronemaster.net/images/houseG.gif",
          }}
        />
        <Text>{"tywinLannister"}</Text>
        <Button title="Details" onPress={() => console.log("Button pressed")} />
      </View>
      <View style={styles.gameListItem}>
        <Image
          style={styles.houseLogo}
          source={{
            uri: "https://game.thronemaster.net/images/houseT.gif",
          }}
        />
        <Text>{"We_do_not_sow"}</Text>
        <Button title="Details" onPress={() => console.log("Button pressed")} />
      </View>
      <View style={styles.gameListItem}>
        <Image
          style={styles.houseLogo}
          source={{
            uri: "https://game.thronemaster.net/images/houseB.gif",
          }}
        />
        <Text>{"necrach"}</Text>
        <Button title="Details" onPress={() => console.log("Button pressed")} />
      </View>
      <Button title="Login" onPress={createTwoButtonAlert} />
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
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
