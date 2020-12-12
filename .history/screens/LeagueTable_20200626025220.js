


import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
let table = {
  uri: "https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2F7DF64048-AD31-45A8-9C31-0F497DC7B024.png?alt=media&token=7f47cbab-d279-40ee-8bd7-4014b8b55b92"
}
export default class Leaguescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Head", "Head2", "Head3", "Head4", "Head5", "Head6", "Head7"],
      widthArr: [100, 40, 40, 40, 40, 40, 40],
      table: [],
    };
  }

  componentDidMount(){
    fetch("https://next.json-generator.com/api/json/get/N1vgN3uTO")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({
        table: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  }
  render({item}) {
    return (
      <View style={{ flex: 1, backgroundColor:"#000", paddingTop:50}}>
        <Image
              source={{ uri: item.image }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
      </View>
    )
  }
}