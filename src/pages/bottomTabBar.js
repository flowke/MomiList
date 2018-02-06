import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import screen from './home';

import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

function Topic() {
  return (
    <View><Text>话题</Text></View>
  )
}

function My() {
  return (
    <View><Text>我的</Text></View>
  )
}

const TabIcon = (name, title) => ({tintColor}) => {
  return (
    <View style={S.iconWrap}>
      <Icon name={name} size={20} color={tintColor}/>
      <Text style={[{color:tintColor}, S.label]}>{title}</Text>
    </View>

  )
}

const S = StyleSheet.create({
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10
  }
})


export default TabNavigator({
  Home: {
    screen ,
    navigationOptions: {
      tabBarIcon: TabIcon('home', 'Home'),
    }
  },
  Topic: {
    screen: Topic,
    navigationOptions: {
      tabBarIcon: TabIcon('book', 'Topic'),
    }
  },
  My: {
    screen: My ,
    navigationOptions: {
      tabBarIcon: TabIcon('megaphone', 'My'),
    }
  },
},{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#EC4D3D',
  }
})
