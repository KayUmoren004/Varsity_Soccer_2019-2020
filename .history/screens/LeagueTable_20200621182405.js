import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';


export default class LeagueTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7'],
      widthArr: [100, 40, 40, 40, 40, 40, 40]
    }
  }
  render(){
    const state = this.state;
    const data = [];
    for (let i = 0; i < 30; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 9; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }
    return (
        <View style={styles.container}>
        
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Table</Text>
            </View>
            
            <ScrollView style={styles.dataWrapper}>
              <Table 
              style={{ alignItems: 'center',
    justifyContent: 'center',}}
              borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    paddingTop: 36,
    paddingBottom: 16,
    backgroundColor: '#0e9c8e',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    shadowColor: '#454d65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
},
headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: '#fff'
},
dataWrapper: { 
  marginTop: -1 ,
   
},
});