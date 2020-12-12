


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
      dataSource:[]
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
  

getData = () => {
    const url = "https://next.json-generator.com/api/json/get/4k1x8fK6d";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.image,
        });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _renderImage = ({item}) =>{
    return(
      <View style={styles.container2}>
      <Image
               source={{ uri: item.image}}
               resizeMethod='auto'
               resizeMode='contain'
               style={styles.image}
             />
            </View>
    )
  }

  

  render() {
    return (
     <View style={styles.container}>
       <FlatList
       style={styles.feed}
       data={this.state.dataSource}
       renderItem={this._renderImage}
       keyExtractor={item => item.id}
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
      
  },
  image:{
    width:'100%',
             height: '100%',
             justifyContent: 'center',
             alignItems: 'center',
  },
  container2:{
    justifyContent: 'center',
    alignItems: 'center', 
      
  },
  feed:{
    marginTop:50
  }
})