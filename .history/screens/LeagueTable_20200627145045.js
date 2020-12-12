


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
    this.getData();
  }
  

 getData = () => {
    const url = "https://next.json-generator.com/api/json/get/4k1x8fK6d";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          table: responseJson.games,
        });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  render() {
    return (
      <View style={styles.container}>
      <Image
            source={{ uri: this.state.table}}
            resizeMethod="resize"
            resizeMode="contain"
            style={{ width: '100%',
          height: '100%', }}
          />
            </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#92c5c2',
    justifyContent: 'center',
      alignItems: 'center', 
  }
})