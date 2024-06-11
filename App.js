import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
// import * as Font from "expo-font"
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Tabs from './components/navigation/Tabs';
import Stack from './components/navigation/Stack';

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
// const loadAssets = (assets) => assets.map(asset => {
//   if (typeof asset === 'string') { return Image.prefetch(asset) }
//   else { return Asset.loadAsync(asset) }
// })

export default function App() {
  // const [ready, setReady] = useState(false)
  // const [loaded, error] = useFonts(Ionicons.font)
  // const [assets] = useAssets([require('./assets/testimage0001.webp')])
  // if (!ready) {
  // if (!assets || !loaded) {
  //   return (<AppLoading
  //   // startAsync={async () => {
  //   //   // await new Promise(resolve => setTimeout(resolve, 10000))
  //   //   // await Font.loadAsync(Ionicons.font)
  //   //   // await Font.loadAsync({ Montserrat: require('./assets/fonts/Montserrat.ttf') })
  //   //   // await Font.loadAsync({ 'Montserrat-SemiBold': { uri: require('./assets/fonts/Montserrat.ttf'), display: Font.FontDisplay.FALLBACK } })

  //   //   // await Asset.loadAsync(require('./assets/testimage0001.webp'))
  //   //   // await Image.prefetch('https://hc.snsmd.kr/static/media/homeBackgroundImg.57076584967a8e9cf9c9.png')

  //   //   const fonts = loadFonts([Ionicons.font])
  //   //   const assets = loadAssets([require('./assets/testimage0001.webp'), 'https://hc.snsmd.kr/static/media/homeBackgroundImg.57076584967a8e9cf9c9.png'])
  //   //   // console.log(assets)
  //   //   await Promise.all([...fonts, ...assets])
  //   // }}
  //   // onFinish={() => setReady(true)}
  //   // onError={console.error}
  //   />)
  // }
  const [appIsReady, setAppIsReady] = useState(false);
  // const [isDark, setIsDark] = useState(useColorScheme() === "dark");

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Ionicons.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        // console.log('hi3')
        setAppIsReady(true);
      }
    }
    // console.log('hi1')
    prepare();
    // console.log('hi2', appIsReady)
  }, []);

  const onLayoutRootView = useCallback(async () => {
    // console.log('onLayoutRootView callback')
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      // console.log('hideasync')
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const isDark = useColorScheme() === 'dark'
  if (!appIsReady) {
    return (
      // <View>
      //   <Text>app is not ready</Text>
      // </View>
      null
    )
  }

  return (
    <>
      <View style={{ flex: 1 }}
        onLayout={onLayoutRootView}>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          {/* <Tabs /> */}
          <Stack />
        </NavigationContainer>
      </View>
      {/* <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}>
        <Text>SplashScreen Demo! 👋</Text>
        <Ionicons name="rocket" size={30} />
      </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
