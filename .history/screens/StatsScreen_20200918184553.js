import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class StatsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> StatsScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
  
    },
  
  });

export default StatsScreen;
