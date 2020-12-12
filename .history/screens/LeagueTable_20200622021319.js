import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Leaguescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image
        
        source={require('https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2F7DF64048-AD31-45A8-9C31-0F497DC7B024.png?alt=media&token=7f47cbab-d279-40ee-8bd7-4014b8b55b92')}
      />
      </View>
    )
  }
}