


import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
let table = {
  uri: "https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2F7DF64048-AD31-45A8-9C31-0F497DC7B024.png?alt=media&token=7f47cbab-d279-40ee-8bd7-4014b8b55b92"
}
export default class Leaguescreen extends Component {

  componentDidMount(){
    
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"#000", paddingTop:50}}>
        <Image
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2FSTANDING1.png?alt=media&token=f319593f-270c-4b94-95b8-8155d5d76a74' }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
      </View>
    )
  }
}