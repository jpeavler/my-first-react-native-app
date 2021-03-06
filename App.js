import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TouchableHighlight, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Something was clicked!");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!</Text>
      <TouchableHighlight onPress={handlePress}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
          }}/>
      </TouchableHighlight>
      <Button title="Click Me" onPress={() => Alert.alert("My Title", "Message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress : () => console.log("No")}
      ])}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
