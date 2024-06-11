import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import colors from '../../colors';
import { useColorScheme } from 'react-native';
import Search from '../screens/Search';
import { Ionicons } from "@expo/vector-icons";
import Stack from './Stack';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            // tabBarIcon: ({ focused, color, size }) => {
            //     let iconName;
            //     if (route.name === 'Movies') {
            //         iconName = focused ? 'film' : 'film';
            //     } else if (route.name === 'Settings') {
            //         iconName = focused ? 'ios-list-box' : 'ios-list'
            //     }
            //     return <Ionicons name={iconName} size={size} color={color} />
            // },
            tabBarLabelStyle: {
                // backgroundColor: "tomato"
                fontSize: 12,
                fontWeight: "600"
            },
            tabBarLabelPosition: "beside-icon",
            tabBarActiveTintColor: isDark ? colors.YELLOW_COLOR : colors.BLACK_COLOR,
            tabBarInactiveTintColor: isDark ? colors.DARK_GRAY : colors.LIGHT_GRAY,
            tabBarStyle: {
                backgroundColor: isDark ? colors.BLACK_COLOR : colors.TOMATO
            },

            headerTitleStyle: {
                color: isDark ? colors.YELLOW_COLOR : colors.BLACK_COLOR
                // headerRight: () => <View><Text>hello</Text></View>
            },
            headerStyle: {
                backgroundColor: isDark ? colors.BLACK_COLOR : colors.WHITE
            }
        })}>
            <Tab.Screen name="Movies" component={Movies}
                options={{
                    tabBarLabelStyle: {
                        // backgroundColor: "purple"
                    },
                    // tabBarBadge: 5
                    // tabBarBadge: "hello",
                    tabBarIcon: ({ color, size }) => (<Ionicons name="film" color={color} size={size} />)
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => { return <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} /> }
                }} />
            {/* <Tab.Screen name="TV" component={Tv}
                options={{
                    tabBarIcon: ({ color, size }) => { return <Ionicons name='tv' color={color} size={size} /> }
                }} /> */}
            <Tab.Screen name="TV" component={Stack}
                options={{
                    tabBarIcon: ({ color, size }) => { return <Ionicons name='tv' color={color} size={size} /> },
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

export default Tabs