import { registerRootComponent } from 'expo'
import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content'/>
      <Routes />
    </NavigationContainer>
  )
}

registerRootComponent(App)
