import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button, Text, StyleSheet, TextInput } from "react-native";

const Settings = (props) => {
  const onApplySettings = () => {
    console.log(username);
    console.log(password);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("After: Settings State initialized");

  return (
    <View style={styles.screen}>
      <Text style={styles.settingsHeadline}>{"Settings"}</Text>
      <TextInput
        style={styles.settingsInput}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
        value={username}
        autoCompleteType="username"
        textContentType="username"
        spellCheck={false}
        autoFocus={true}
        spellCheck={false}
        clearButtonMode="while-editing"
      />
      <TextInput
        style={styles.settingsInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCompleteType="password"
        textContentType="password"
        placeholder="password"
        secureTextEntry={true}
        clearButtonMode="while-editing"
      />
      <Button title="Apply" onPress={onApplySettings} />
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
  settingsHeadline: {
    color: "#333",
    fontSize: 24,
  },
  settingsInput: {
    borderColor: "black",
    // borderWidth: 1,
    backgroundColor: "white",
    width: "100%",
  },
  gameListStyle: {},
});

export default Settings;
