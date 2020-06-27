import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './source/routes';
import styles from './source/assets/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Routes />
    </View>
  );
}
