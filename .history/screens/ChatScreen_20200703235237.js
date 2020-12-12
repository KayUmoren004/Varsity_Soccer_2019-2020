// Aboutscreen.js
import React, { Component } from 'react';
import { Keyboard,Platform, KeyboardAvoidingView, SafeAreaView, ImageBackground,View,Text,StyleSheet} from 'react-native';
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
  constructor() {
    super();
    this.state = {
      Name: "",
    };
  }

  state = {
    messages: [],
  };

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
          backgroundColor: "#000",
          borderColor: "#000",
        }}
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 5 }}>
          <Icon style={[{ color: "#d3f2ef" }]} size={40} name={"ios-send"} />
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
       
                    textInputProps={{
                        style: {
                            width: '90%',
                            height: 46,
                            fontSize: 16,
                            color: "white",
                            paddingTop: 6,
                            paddingLeft: 16,
                            paddingRight: 16,
                           
                        }
                    }}
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
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#fff",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#fff",
        fontWeight: "600"
    },
    container2: {
        flex: 1,

    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#000",
        marginTop: 32
    },
    continue: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    inputToolbarStyle: {
        
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#000',
        borderRadius: 25
    },

});


export default ChatScreen;