import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LeagueTable extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Text style={{color:'#fff'}}>You asked I coded!</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});