/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Header from './component/header';
import Home from './pages/home';
import BottomTabBar from './pages/bottomTabBar';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor='transparent'
        />
        <Header></Header>
        <BottomTabBar></BottomTabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
  },
});
