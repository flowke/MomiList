import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';

export default class Header extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.header}>
        <View style={S.titleWrap}></View>
        <Text style={S.title}>MomiList</Text>

        <View style={S.inputWrap}>
          <Icon
            style={S.searchIcon}
            name="search"
            size={16}
            color="#4E5659"
          />
          <TextInput
            style={S.input}
            placeholder="search"
            autoCorrect={false}
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  header: {
    backgroundColor: '#FF3B30',
    ...Platform.select({
      ios: {
        height: 94,
        paddingTop: 20
      },
      android: {
        height: 98,
        paddingTop: 24
      }
    })
  },
  titleWrap: {
    marginTop: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  inputWrap: {
    flexDirection: 'row',
    height: 30,
    paddingHorizontal: 8,
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    height: 30,
    color: '#1a2429',
    padding: 0,

  }
})
