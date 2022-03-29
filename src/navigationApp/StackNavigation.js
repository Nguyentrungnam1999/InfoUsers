import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../Screen/Details'
import Home from '../Screen/Home'
import React from 'react'

export default function AppNavigation() {
  const stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Details} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
