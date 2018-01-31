import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Nav from './Nav';

export default class Home extends Component{

  constructor(props){
      super(props);
  }

  render(){
    return (
      <View>
        <Nav/>
      </View>
    )
  }
}
