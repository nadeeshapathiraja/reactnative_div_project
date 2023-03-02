import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './views/pages/SplashScreen'
import Login from './views/pages/Login'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import NicInfo from './views/pages/NicInfo'
import Home from './views/pages/Home'

export default function App() {
    return (
        <SafeAreaProvider>
            <View>
                <Home />
            </View>
        </SafeAreaProvider>

    )
}