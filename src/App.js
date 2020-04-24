import { registerRootComponent } from 'expo'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './Routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

registerRootComponent(App)
