import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Main from './pages/Main'
import Profile from './pages/Profile'

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
