import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();
const Tabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Tv" component={Search} />
        <Tab.Screen name="Search" component={Tv} />
    </Tab.Navigator>
)

export default Tabs