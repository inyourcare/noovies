import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';
import { useColorScheme } from 'react-native'
import colors from '../../colors';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {
                // backgroundColor: "tomato"
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