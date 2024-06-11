import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  const [ready, setReady] = useState(false)
  if (!ready) {
    return (<AppLoading
      startAsync={async () => {
        await new Promise(resolve => setTimeout(resolve, 10000))
      }}
      onFinish={() => setReady(true)}
      onError={console.error}
    />)
  }
  return (<Text>We are done loading</Text>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
