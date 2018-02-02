import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
} from 'react-native';

import {
  TabNavigator,
  TabBarTop,
} from 'react-navigation';

import Hotest from './hotest';
import Newest from './newest';

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
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      inactiveTintColor: '#EC4D3D',
      activeTintColor: '#EC4D3D',
      labelStyle: {
        fontWeight: '800'
      },
      indicatorStyle: {
        height: 4,
        backgroundColor: '#EC4D3D'
      },
      style: {
        backgroundColor: '#fff',
      },
    },


  }
);
