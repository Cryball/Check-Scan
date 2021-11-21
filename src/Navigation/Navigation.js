import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiagramPage from '../Components/Pages/DiagramPage/DiagramPage';
import SettingsPage from '../Components/Pages/SettingsPage/SettingsPage';
import PurchaseHistory from '../Components/Pages/Purchase history/PurchaseHistory';
import PhotoPage from '../Components/Pages/PhotoPage/PhotoPage';
import { colors } from '../../constants';
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { useTranslation } from '../Localization/Translations';
import CurrentShopBills from '../Components/Pages/CurrentShopBills/CurrentShopBills';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    const { purchaseHistory, newReceipt, costAnalysis, profile } = useTranslation()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: colors.MAIN_WHITE,
                    borderRadius: 15,
                    //shadow
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }
            }}
        >
            <Tab.Screen name="Purchase" component={PurchaseHistory} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            source={require('../images/invoice.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.MAIN_GREEN : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? colors.MAIN_GREEN : '#748c94', fontSize: 10 }}>{purchaseHistory}</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Photo" component={PhotoPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            source={require('../images/plus.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.MAIN_GREEN : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? colors.MAIN_GREEN : '#748c94', fontSize: 10 }}>{newReceipt}</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Diagram" component={DiagramPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            source={require('../images/pie-chart.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.MAIN_GREEN : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? colors.MAIN_GREEN : '#748c94', fontSize: 10 }}>{costAnalysis}</Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            source={require('../images/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.MAIN_GREEN : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? colors.MAIN_GREEN : '#748c94', fontSize: 10 }}>{profile}</Text>
                    </View>
                ),
            }} />
            {/* <Tab.Screen name="CurrentShopBills" component={CurrentShopBills} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            source={require('../images/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.MAIN_GREEN : '#748c94'
                            }}
                        />
                        <Text style={{ color: focused ? colors.MAIN_GREEN : '#748c94', fontSize: 10 }}>How will</Text>
                    </View>
                ),
            }} /> */}
        </Tab.Navigator>
    );
}
export default MyTabs