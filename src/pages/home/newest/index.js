import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class Newest extends Component{
  constructor(props){
      super(props);
  }

  render(){
    let {navigate} = this.props.navigation;
    return (
      <View style={S.box}>
        <Text> 最新消息 </Text>
        {/* <TouchableOpacity
          onPress={()=>{
            Alert.alert(
          '来来来',
          'ffdlksjak;j',
          [

          ]
            )
          }}
          >
          <Text>点击此处跳转到 Hotest</Text>
        </TouchableOpacity> */}
        <Text
          onPress={()=>{
            // Alert.alert(
            //   '来来来',
            //   'ffdlksjak;j',
            //   [
            //
            //   ]
            // )
            navigate('Hotest')
          }}
        >点击此处跳转到 Hotest</Text>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

})
