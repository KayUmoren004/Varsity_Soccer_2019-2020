


import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  creatStackNavigator,
  createStackNavigator,
} from "react-navigation-stack";

export default class Leaguescreen extends Component {
  intervalID;
  constructor() {
    super();
    this.state = {
      table: [],
    };
  }

  componentDidMount() {
    fetch('https://next.json-generator.com/api/json/get/4k1x8fK6d').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        table: res
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


  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"#000", paddingTop:50}}>
        <Image
              source={{ uri: this.state.table }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
      </View>
    )
  }
}