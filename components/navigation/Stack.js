import React from 'react'
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenOne = () => <View><Text>One</Text></View>
const ScreenTwo = () => <View><Text>Two</Text></View>
const ScreenThree = () => <View><Text>Three</Text></View>

const NativeStack = createNativeStackNavigator();
const Stack = () => <NativeStack.Navigator>
    <NativeStack.Screen name='One' component={ScreenOne} />
    <NativeStack.Screen name='Two' component={ScreenTwo} />
    <NativeStack.Screen name='Three' component={ScreenThree} />
</NativeStack.Navigator>

export default Stack