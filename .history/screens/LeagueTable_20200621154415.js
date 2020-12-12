import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Table from '../League Table Stepup/Table'

export default class LeagueTable extends React.Component {
  render(){
    return (
       <Table />
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