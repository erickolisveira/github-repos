import { registerRootComponent, AppLoading } from 'expo'
import React, { useState } from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import fetchFonts from './fonts/LoadFonts'

import Routes from './routes'

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}/>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content'/>
      <Routes />
    </NavigationContainer>
  )
}

registerRootComponent(App)
