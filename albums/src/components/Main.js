import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

const Main = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default Main;
