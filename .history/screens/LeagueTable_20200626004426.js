


import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
let table = {
  uri: "https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2F7DF64048-AD31-45A8-9C31-0F497DC7B024.png?alt=media&token=7f47cbab-d279-40ee-8bd7-4014b8b55b92"
}
export default class Leaguescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"#000", paddingTop:50}}>
        <Image
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsfeed%2FMy%20Post%20(63).png?alt=media&token=df52852b-d98a-49a0-a45d-6337e46d6f63' }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
      </View>
    )
  }
}