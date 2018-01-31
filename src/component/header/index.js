import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';


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
          <TextInput
            style={S.input}
            placeholder="search"
            autoCorrect={false}
          ></TextInput>
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  header: {
    height: 102,
    backgroundColor: '#FF3B30',
    paddingTop: 20,
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
    height: 36,
    paddingHorizontal: 8,
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  input: {
    height: 36,
    color: '#1a2429'
  }
})
