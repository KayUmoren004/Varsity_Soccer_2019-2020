// Aboutscreen.js
import React, { Component } from 'react';
import { Keyboard, Platform, KeyboardAvoidingView, Animated, SafeAreaView, ImageBackground,View,Text,StyleSheet, TouchableOpacity, keyboard} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GiftedChat, InputToolbar, Send } from "react-native-gifted-chat"; // 0.3.0
import Fire from './Fire';
import firebase from "firebase"
import SignUpScreen from './SignUpScreen'

import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { Bubble } from "react-native-gifted-chat";
class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
    };
  }

  state = {
    messages: [],
  };

  back = () =>{
     this.props.navigation.navigate("Home");
  }

  get user() {
    return {
      _id: Fire.uid,
      name: firebase.auth().currentUser.displayName,
    };
  }

 
  registerForPushNotificationsAsync = async (user) => {
    const { existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      alert("NOTIFICATIONS NEED TO BE ENABLED SO AS TO RECEIVE MESSAGES!");
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    // POST the token to our backend so we can use it to send pushes from there
    var updates = {};
    updates["/expoToken"] = token;
    await firebase
      .database()
      .ref("/Users/" + Fire.uid)
      .update(updates);
    //call the push notification
  };

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        that.registerForPushNotificationsAsync(user);
      }
    });

    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  UNSAFE_componentWillUnmount() {
    Fire.off();
  }

  renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#2f4f4f",
          borderColor: "#000",
        }}
       
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 5, alignItems: "flex-end", justifyContent:"center" }}>
          <Icon style={[{ color: "#fff" }]} size={30} name={"ios-send"} />
        </View>
      </Send>
    );
  }

  render() {
    const chat = (
      <GiftedChat
        isAnimated={true}
        renderUsernameOnMessage={true}
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
        showUserAvatar={true}
        renderAvatarOnTop={false}
        placeholder="Type Something..."
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        bottomOffset={54}
        renderInputToolbar={this.renderInputToolbar}
        renderSend={this.renderSend}
        
        
        
      />
    );

    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      );
    }

    return (
      <ImageBackground
        source={require("../components/images/mainww.png")}
        style={{ flex: 1 }}>
        
        <KeyboardAvoidingView behavior={'padding'} style={{flex:1}} keyboardVerticalOffset={30} enabled>
        <SafeAreaView 
        >{chat}</SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#fff",
    fontWeight: "600",
  },
  container2: {
    flex: 1,
  },
  
  continue: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
  },
  inputToolbarStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000",
    borderRadius: 25,
  },
  header: {
    paddingTop: 26,
    paddingBottom: 16,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowColor: "#454d65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    //flexDirection:"row"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
});


export default ChatScreen;