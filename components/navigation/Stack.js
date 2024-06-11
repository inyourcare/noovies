import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../colors';

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
        <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Movies" })}>
            <Text>Go To Tabs</Text>
        </TouchableOpacity>
    </>)

const NativeStack = createNativeStackNavigator();
const Stack = () => (
    <NativeStack.Navigator screenOptions={{
        // presentation: "modal",
        headerBackVisible: false,
        // headerShown: false,
        headerTintColor: colors.YELLOW_COLOR,
        animation: "flip"
    }}>
        <NativeStack.Screen name='One' component={ScreenOne} />
        <NativeStack.Screen name='Two' component={ScreenTwo} />
        <NativeStack.Screen name='Three' component={ScreenThree}
        // options={{ presentation: "modal" }}
        />
    </NativeStack.Navigator>
)

export default Stack