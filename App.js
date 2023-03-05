import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './views/pages/SplashScreen'
import Login from './views/pages/Login'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import NicInfo from './views/pages/NicInfo'
import Home from './views/pages/Home'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (

        <NavigationContainer>
            <SafeAreaProvider>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Home />
                </View>
            </SafeAreaProvider>
        </NavigationContainer>


        // <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        //     <View style={{ flex: 1, backgroundColor: 'red' }} />
        //     <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
        //     <View style={{ flex: 3, backgroundColor: 'green' }} />
        // </View>

    )
}