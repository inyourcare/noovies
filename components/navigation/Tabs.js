import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator();
const Tabs = () => {
    const colorScheme = useColorScheme();
    console.log(colorScheme)
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {
                // backgroundColor: "tomato"
            },
            tabBarLabelPosition: "beside-icon",
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "#555",
            tabBarStyle: {
                backgroundColor: 'tomato'
            },

            headerTitleStyle: {
                color: '#369',
                // headerRight: () => <View><Text>hello</Text></View>
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