import React from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/components/main';

// Create a component
const App = () => (
  <Main />
);

// Render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
