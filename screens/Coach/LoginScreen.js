import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class LoginScreenCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> LoginScreen </Text>
      </View>
    );
  }
}

export default LoginScreenCoach;
