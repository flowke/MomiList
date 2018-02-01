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
  View
} from 'react-native';

import Header from './component/header';
import Home from './pages/home';
import Card from './component/card';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header></Header> */}
        {/* <Home></Home> */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
});
