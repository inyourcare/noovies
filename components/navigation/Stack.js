import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenOne = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Two")}>
        <Text>One</Text>
    </TouchableOpacity>)
const ScreenTwo = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Three")}>
        <Text>Two</Text>
    </TouchableOpacity>)
const ScreenThree = ({ navigation: { navigate, goBack, setOptions } }) => (
    <>
        <TouchableOpacity onPress={() => navigate("One")}>
            {/* <TouchableOpacity onPress={() => goBack()}> */}
            <Text>Three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOptions({ title: 'Hello' })}>
            <Text>ChangeTitle</Text>
        </TouchableOpacity>
    </>)

const NativeStack = createNativeStackNavigator();
const Stack = () => <NativeStack.Navigator>
    <NativeStack.Screen name='One' component={ScreenOne} />
    <NativeStack.Screen name='Two' component={ScreenTwo} />
    <NativeStack.Screen name='Three' component={ScreenThree} />
</NativeStack.Navigator>

export default Stack