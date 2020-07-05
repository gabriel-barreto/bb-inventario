import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';

import App from '../../app.json';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure({
    name: App.expo.name,
    host: '192.168.56.212',
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;
  console.tron.clear();
}
