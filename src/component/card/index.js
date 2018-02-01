import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import avatar from './img/avatar.png';

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>

        <View style={S.avatarWrap}>
          <Image style={S.avatar} source={avatar}/>
        </View>

        <View style={S.content}>
          <Text
            style={S.summary}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            atom编辑器社区插件推荐- 最大的 感觉就是用着清爽， 依赖github强大的社区，基于atom的插件也特别丰富，按需
          </Text>
          <Text style={S.time}>11:06</Text>
        </View>

      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 6,
    // borderColor: '#979797',
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowOffset: {width:0,height:4},
    shadowRadius: 8,
    elevation: 3,
  },
  avatarWrap: {
    marginRight: 18,

  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45/2,
  },
  content: {
    flex: 1,
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#384347'
  },
  time: {
    marginTop: 10,
    color: '#A3ADB4'
  }
})
