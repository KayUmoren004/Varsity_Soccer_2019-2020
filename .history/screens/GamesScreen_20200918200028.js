import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  ScrollView,
  LayoutAnimation,
  Image,
  Animated
} from "react-native";

import * as firebase from "firebase";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  creatStackNavigator,
  createStackNavigator,
} from "react-navigation-stack";

import Fire from "./Fire";
import moment from "moment";
import { getposts, getVs, getGame } from "../screens/Api/Api";
import { Divider } from "react-native-paper";

import * as Permissions from "expo-permissions";
import { Notifications } from "expo";



let VS = {
  uri:
    "https://firebasestorage.googleapis.com/v0/b/schenectady-varsity-soccer.appspot.com/o/Shsgame%2Fcoollogo_com-1245574.png?alt=media&token=9188d40d-bb61-4d8e-a689-ed6ca6303880",
};


export default class GamesScreen extends React.Component {
  intervalID;
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

 

  UNSAFE_componentWillUnmount() {
    clearTimeout(this.intervalID);
    
   
  }

  getData = () => {
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
  };

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
              {item.date}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: item.home }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
            <Image
              source={{ uri: item.vs }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 70, height: 70 }}
            />
            <Image
              source={{ uri: item.away }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginBottom: 10,
                marginTop: 10,
                fontWeight: "800",
              }}
            >
              {item.homescore}
            </Text>
            <Text
              style={{
                color: "#fff",
                marginBottom: 10,
                marginTop: 10,
                fontWeight: "800",
              }}
            >
              {item.dash}
            </Text>
            <Text
              style={{
                color: "#fff",
                marginBottom: 10,
                marginTop: 10,
                fontWeight: "800",
              }}
            >
              {item.awayscore}
            </Text>
          </View>
          <Divider
            style={{
              backgroundColor: "#87CEEB",
              marginBottom: 10,
              marginTop: 10,
            }}
          />
          <View style={{
            flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
          }}>

          
          <Text style={styles.name2}>{item.game}</Text>
</View>
          <Divider style={{ backgroundColor: "#87CEEB" }} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text style={styles.name}>{item.time}</Text>

            <Text style={styles.name}>{item.location}</Text>
          </View>
          <Divider style={{ backgroundColor: "#87CEEB" }} />
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
          ItemSeparatorComponent={() => (
            <Divider style={{ backgroundColor: "#fff" }} />
          )}
          
        ></FlatList>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingTop: 36,
    paddingBottom: 16,
    backgroundColor: "#2163f6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowColor: "#454d65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "900",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
  },

  name2: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 10,

    alignSelf: "center",
  },
  timestamp: {
    fontSize: 11,
    color: "#9BD1FA",
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize:20,
    color: "#838899",
    fontWeight:'700'
  },
  postImage: {
    width: undefined,
    height: 150,

    marginVertical: 16,
  },
  postImage2: {
    width: undefined,
    height: 150,
  },
  postImage3: {
    marginTop: 50,
    marginBottom: 10,
    width: undefined,
    height: 40,
  },
});
