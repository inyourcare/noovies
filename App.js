import AppLoading from 'expo-app-loading';
import React from 'react';
import { StyleSheet } from 'react-native';
// import * as Font from "expo-font"
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { useAssets } from 'expo-asset';
import { useFonts } from "expo-font";
import Tabs from './components/navigation/Tabs';

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
// const loadAssets = (assets) => assets.map(asset => {
//   if (typeof asset === 'string') { return Image.prefetch(asset) }
//   else { return Asset.loadAsync(asset) }
// })

export default function App() {
  // const [ready, setReady] = useState(false)
  const [loaded, error] = useFonts(Ionicons.font)
  const [assets] = useAssets([require('./assets/testimage0001.webp')])
  // if (!ready) {
  if (!assets || !loaded) {
    return (<AppLoading
    // startAsync={async () => {
    //   // await new Promise(resolve => setTimeout(resolve, 10000))
    //   // await Font.loadAsync(Ionicons.font)
    //   // await Font.loadAsync({ Montserrat: require('./assets/fonts/Montserrat.ttf') })
    //   // await Font.loadAsync({ 'Montserrat-SemiBold': { uri: require('./assets/fonts/Montserrat.ttf'), display: Font.FontDisplay.FALLBACK } })

    //   // await Asset.loadAsync(require('./assets/testimage0001.webp'))
    //   // await Image.prefetch('https://hc.snsmd.kr/static/media/homeBackgroundImg.57076584967a8e9cf9c9.png')

    //   const fonts = loadFonts([Ionicons.font])
    //   const assets = loadAssets([require('./assets/testimage0001.webp'), 'https://hc.snsmd.kr/static/media/homeBackgroundImg.57076584967a8e9cf9c9.png'])
    //   // console.log(assets)
    //   await Promise.all([...fonts, ...assets])
    // }}
    // onFinish={() => setReady(true)}
    // onError={console.error}
    />)
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
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
