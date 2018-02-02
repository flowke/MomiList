import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  TabNavigator,
  TabBarTop
} from 'react-navigation';

import Hotest from './hotest';
import Newest from './newest';

function Name(){
  return (
    <View><Text>fds</Text></View>
  )
}

export default  HomeSubNav = TabNavigator(
  {
    Hotest: {
      screen: Hotest,
      navigationOptions: {
        title: 'Home'
      }
    },
    Newest: {
      screen: Newest
    }
  },{
    // tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true
  }
);
