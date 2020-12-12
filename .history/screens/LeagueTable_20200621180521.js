import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LeagueTable extends React.Component {
  render(){
    return (
        <View style={styles.container}>
         <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Table</Text>
            </View>
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