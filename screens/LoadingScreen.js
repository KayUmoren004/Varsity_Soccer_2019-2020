// Aboutscreen.js
import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from "firebase";
export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }
    render() {
        return (
            <ImageBackground
                source={require('../components/images/mainww.png')}
                style={styles.container}>
                <View style={styles.container}>
                    <Text>Loading...</Text>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});