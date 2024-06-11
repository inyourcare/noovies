import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator();
const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {
                // backgroundColor: "tomato"
            },
            tabBarLabelPosition: "beside-icon",
            tabBarActiveTintColor: isDark ? "#ffa801" : "black",
            tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
            tabBarStyle: {
                backgroundColor: isDark ? '#1e272e' : 'tomato'
            },

            headerTitleStyle: {
                color: isDark ? "#ffa801" : "#1e272e"
                // headerRight: () => <View><Text>hello</Text></View>
            },
            headerStyle: {
                backgroundColor: isDark ? "#1e272e" : "white"
            }
        }}>
            <Tab.Screen name="Movies" component={Movies}
                options={{
                    tabBarLabelStyle: {
                        // backgroundColor: "purple"
                    },
                    // tabBarBadge: 5
                    // tabBarBadge: "hello",
                }}
            />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Tv" component={Tv} />
        </Tab.Navigator>
    )
}

export default Tabs