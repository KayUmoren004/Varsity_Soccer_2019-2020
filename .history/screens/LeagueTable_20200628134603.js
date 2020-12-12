


import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  creatStackNavigator,
  createStackNavigator,
} from "react-navigation-stack";
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.width/1920; //541 is actual image width

export default class Leaguescreen extends Component {
  intervalID;
  constructor() {
    super();
    this.state = {
      table:[]
    };
  }

  componentDidMount() {
    fetch('https://next.json-generator.com/api/json/get/4k1x8fK6d').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        table: res.games
      });
    }).catch(err => {
      console.log(err);
    });
  }
  

 /* getData = () => {
    const url = "https://next.json-generator.com/api/json/get/E1hvbyXY_";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.games,
        });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

  _renderImage = ({item}) => {
   return(
    <View style={{justifyContent:'center'}}>
    <Image
               source={{ uri: 'ttps://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2FSTANDING1.png?alt=media&token=f319593f-270c-4b94-95b8-8155d5d76a74'}}
               resizeMethod="resize"
               resizeMode="contain"
               style={{ width:100,
             height: 100, margin:50 }}
             />
       </View>
   )
  }
  

  render() {
    return (
      <FlatList
      style={styles.container}
      data={this.state.table}
      renderItem={this._renderImage}
      keyExtractor={item => item.id}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#92c5c2',
    
  }
})