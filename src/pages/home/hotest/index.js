import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import Card from '../../../component/card';
import cardsData from '../../../component/card/mockData';

export default class Name extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.box}>
        <View style={S.listWrap}>
          <FlatList
            data={cardsData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
              <Card
                {...{
                  source: item.source,
                  content: item.content,
                  time: item.time
                }}
              />
            )}
          />
        </View>
      </View>
    )
  }
}

const S = StyleSheet.create({
  box: {
    flex: 1,
  },
  listWrap: {
    flex: 1,
    marginTop: 18,
  }
})
