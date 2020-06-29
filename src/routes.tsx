import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from '../app.json';

import { DefaultColors as Colors } from './themes';

import Details from './pages/Details';
import Form from './pages/Form';
import List from './pages/List';
import Reader from './pages/Reader';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={App.expo.name}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary.hex(),
          },
          headerTintColor: Colors.lightest.hex(),
          cardStyle: {
            backgroundColor: Colors.light.hex(),
          },
        }}
      >
        <Stack.Screen name="List" component={List} />

        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Reader" component={Reader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
