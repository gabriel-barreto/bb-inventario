import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './pages/Details';
import Form from './pages/Form';
import List from './pages/List';
import Reader from './pages/Reader';

import App from '../app.json';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={App.expo.name}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffc813',
          },
          headerTintColor: '#fff',
          cardStyle: {
            backgroundColor: '#ededed',
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
