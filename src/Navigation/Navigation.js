import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiagramPage from '../Components/Pages/DiagramPage/DiagramPage';
import SettingsPage from '../Components/Pages/SettingsPage/SettingsPage';
import PurchaseHistory from '../Components/Purchase history/PurchaseHistory';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={PurchaseHistory} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}
export default MyTabs