import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, FlatList, ScrollView, LayoutAnimation, Image, Animated } from "react-native";

import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeamChat from './ChatScreen';
import Fire from './Fire';

import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import moment from "moment";


import {getitem} from '../screens/Api/Api'
import { Divider } from "react-native-paper";
import ViewMoreText from "react-native-view-more-text";
//import { Divider } from "react-native-paper";

export default class HomeScreen extends React.Component {
  

    state = {
       dataSource:[],
       likes: null,
       disabled:false
    }


  

   componentDidMount(){
        this.getData();
    }

    componentWillUnmount(){
        clearTimeout(this.intervalID);
    }

    getData = () => {
        const url = "https://next.json-generator.com/api/json/get/VJZ23CfY_";
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              dataSource: responseJson.posts,
            });
             this.intervalID = setTimeout(this.getData.bind(this), 5000);
          })
          .catch((error) => {
            console.log(error);
          });
    }

     renderViewMore(onPress){
      return(
        <Text onPress={onPress} style={{color:"#fc031c", fontWeight:"800"}}>View more</Text>
      )
    }

    renderViewLess(onPress){
      return (
        <Text onPress={onPress} style={{ color: "#fc031c", fontWeight:"800" }}>
          View less
        </Text>
      );
    }


    pressButton= () => {
      let newCount = this.state.likes + 1;
      this.setState({
        disabled: true,
        likes: newCount
      });
      
      /*enable after 5 second
      setTimeout(()=>{
         this.setState({
          disabled: false,
        });
      }, 5000)*/
    }
    addLike = () => {
      let newCount = this.state.likes + 1;
        this.setState({
        likes: newCount
      });
      this.readLike
    };

    readLike = (Likes) => {
    let ref = firebase.database().ref('/Likes')
    
    return ref
      .update(Likes)
      .then(() => ref.once('value'))
      .then(snapshot => snapshot.val())
      .then(this.setState({
        likes: Likes
      }))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }))
    }
    


    _renderPost = ({ item }) => {
        return (
          <View style={styles.feedItem}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  
                  <Text style={styles.timestamp}>
                   {item.data}
                  </Text>
                </View>
               
              </View>
              <Divider style={{ backgroundColor: "#fff", paddingBottom:4, marginBottom:8, marginTop:8 }} />
              <ViewMoreText
                numberOfLines={5}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                //textStyle={{ textAlign: "center" }}
              >
                <Text style={styles.post}>{item.text}</Text>
              </ViewMoreText>
              <Image
                source={{ url: item.image }}
                style={styles.postImage}
                resizeMode="cover"
              />
            
            </View>
          </View>
        );
    };

    render() {
        return (
          <View style={styles.container}>
           
            <FlatList
              style={styles.feed}
              data={this.state.dataSource}
              renderItem={this._renderPost}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              
            ></FlatList>
          </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1b1b1b'

    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: '#6948f4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        shadowColor: '#454d65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10,
       // height:this.animatedHeaderHeight,
        position:"relative"
        //top:0
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "900",
        color: '#fff'
    },
    feed: {
        marginHorizontal: 8,
    },
    feedItem: {
        backgroundColor: "#000",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 4,
        width:"100%"
        
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "900",
        color: "#fff",
       paddingTop:4,
       justifyContent:'center',
       //alignItems:'center',
       //alignSelf:'center',
      // alignContent:'center',
       //textAlignVertical:'center'
    },
    timestamp: {
        fontSize: 11,
        color: "#9BD1FA",
        //marginTop: 4,
       // paddingTop:2,
        //paddingBottom:8
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#fff"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});


