import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LeagueTable extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Text>To share a photo from your phone with a friend, just press the button below!</Text>
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