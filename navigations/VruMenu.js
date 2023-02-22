import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checkmenu from '../screens/Checkmenu';
import Myprofile from '../screens/Myprofile';
import HomeMenu from '../screens/HomeMenu';
import VRU from '../screens/VRU';
import Menumix from '../screens/Menumix';
import Receipt from '../screens/Receipt';


const Stack = createStackNavigator();

export default function VruMenu() {
    return (
        <Stack.Navigator initialRouteName="VRU">
            <Stack.Screen
                name="VRU"
                component={VRU}
                options={{ title: " sign up" }}
            />
            <Stack.Screen
                name="HomeMenu"
                component={HomeMenu}
                options={{ title: " VRU_Home" }}
            />
            <Stack.Screen
                name="Checkmenu"
                component={Checkmenu}
                options={{ title: "Check class" }}
            />
            <Stack.Screen
                name="Myprofile"
                component={Myprofile}
                options={{ title: "Profile" }}
            />
            <Stack.Screen
                name="Menumix"
                component={Menumix}
                options={{ title: " select" }}
            />
            <Stack.Screen
                name="Receipt"
                component={Receipt}
                options={{ title: " Receipt" }}
            />
        </Stack.Navigator>
    );

}
