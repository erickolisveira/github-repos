import React from 'react';
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import { 
  Main,
  Followers,
  Following,
  Profile,
  Repository
} from '../screens'

function LogoTitle({ title }) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../assets/GitHub-Mark-Light-120px-plus.png')}/>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}

export default function Routes() {
  return (
    <Stack.Navigator 
      initialRouteName="Main" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textAlign: 'center',
        },
      }}>
      <Stack.Screen name="Main" component={Main}
        options={{ headerTitle: () => <LogoTitle title="Buscar Dev"/> }} />
      <Stack.Screen name="Profile" component={Profile} 
        options={{ headerTitle: () => <LogoTitle title="Perfil"/> }} />
      <Stack.Screen name="Followers" component={Followers}
        options={{ headerTitle: () => <LogoTitle title="Seguidores"/> }} />
      <Stack.Screen name="Following" component={Following}
        options={{ headerTitle: () => <LogoTitle title="Seguindo"/> }} />
      <Stack.Screen name="Repository" component={Repository}
        options={{ headerTitle: () => <LogoTitle title="Repositório"/> }} />
    </Stack.Navigator>
  );
}
