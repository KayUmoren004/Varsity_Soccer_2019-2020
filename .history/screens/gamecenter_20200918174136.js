import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class gamecenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> gamecenter </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center'

  },

});

export default gamecenter;
