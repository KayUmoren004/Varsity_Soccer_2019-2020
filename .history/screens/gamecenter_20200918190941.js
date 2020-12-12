import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  NavigationContainer,
  createAppContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LineupScreen from './LineupScreen';
import StatsScreen from './StatsScreen'
const LineupStack = createStackNavigator();

function LineupStackScreen(){
  return (
    <LineupStack.Navigator>
      <LineupStack.Screen
      name="LINE-UPS"
      component={LineupScreen}
      options={{
        title:"LINE-UPS"
      }}/>
    </LineupStack.Navigator>
  )
}

const StatsStack = createStackNavigator();

function StatsStackScreen(){
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
      name="STATS"
      component={StatsScreen}
      options={{
        title:"STATS"
      }}/>
    </StatsStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      

  },

});

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer
    independent={true}
    >
    <Tab.Navigator
    
    swipeEnabled={false}
     tabBarOptions={{
       labelStyle:{color:"#fff", fontWeight:"800"},
    style: { backgroundColor: '#6948f4',  borderColor:'#000' },
    showIcon:true,
    //activeTintColor:"#6948f4"
   }}
   
    >
      <Tab.Screen name="LINE-UPS" component={LineupStackScreen} />
      <Tab.Screen name="STATS" component={StatsStackScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


