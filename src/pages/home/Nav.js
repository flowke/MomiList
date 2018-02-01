import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Hotest from './hotest';
import Newest from './newest';

export default HomeSubNav = TabNavigator({
  Hotest: {
    screen: Hotest,
  },
  Newest: {
    screen: Newest
  }
});

 class NavBar extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View>

      </View>
    )
  }
}
