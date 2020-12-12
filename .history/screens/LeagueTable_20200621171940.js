import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LeagueTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
      DataTable: [
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5']
      ]
    }
  }
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