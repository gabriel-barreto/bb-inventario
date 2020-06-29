import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import './src/config';

import Routes from './src/routes';
import { DefaultTheme } from './src/themes';

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
