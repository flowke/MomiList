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
      <View style={S.box}>
        <Nav/>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    // height: 300,
    // backgroundColor: 'red',
  }
})
