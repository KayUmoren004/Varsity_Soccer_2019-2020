import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import LoadingScreen from './screens/LoadingScreen';
import ChatScreen from './screens/ChatScreen';
import About from "./screens/postclick";
import LoginScreenCoach from "./screens/Coach/LoginScreen"
import MainChatScreen from './screens/MainChatScreen';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameCenter from './screens/Gamecenter';



class App extends React.Component {
}







const AppStack = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      title: "Home",
      headerShown: false,
    },
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      title: "Chat",
      headerShown: true,
    },
    About: {
      screen: About,
    },
    
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerShown: false
    }
  },
  Register: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up',
      headerShown: false
    },
    GameCenter: {
      screen: GameCenter,
      navigationOptions: {
        title: 'Game Center',
        headerShown: true
      }
    }
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,

    },
    {
      //initialRouteName: "Loading"
    }
  )
);