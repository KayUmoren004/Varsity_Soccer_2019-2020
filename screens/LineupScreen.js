import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LineupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <Text> LineupScreen </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000"
  
    },
  
  });
  

export default LineupScreen;
