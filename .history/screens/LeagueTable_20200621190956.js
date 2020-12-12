import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';



export default class LeagueTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7'],
      widthArr: [100, 40, 40, 40, 40, 40, 40],
      table: [],
    }
  }

  componentDidMount() {
    fetch('https://next.json-generator.com/api/json/get/N1vgN3uTO').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        table: res
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render(){
    return (
        <View style={styles.container}>
            
        <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Combined Suburban Council League Table
              </Text>
            </View>
            <View style={styles.header2}>
              <Text>
                Pos
              </Text>
              <Text>
                Team
              </Text>
              <Text>
                W
              </Text>
              <Text>
                D
              </Text>
              <Text>
                L
              </Text>
              <Text>
                GD
              </Text>
              <Text>
                GP
              </Text>
              <Text>
                PTS
              </Text>
            </View>
            
            <FlatList
          data={
						this.state.table
					}
          renderItem={({item}) => {

						let team = item.abbr;
						//let logo = images[team]["uri"];
						return (
							<View style={{flexDirection:'row'}}>
								<Image
              source={{ uri: item.logo }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
								<Text style={{color:'#fff'}}>{item.name}</Text>
								<Text style={{color:'#fff'}}>{item.gamesPlayed}</Text>
								<Text style={{color:'#fff'}}>{item.won}</Text>
								<Text style={{color:'#fff'}}>{item.draw}</Text>
								<Text style={{color:'#fff'}}>{item.lost}</Text>
								<Text style={{color:'#fff'}}>{item.goalDiff}</Text>
								<Text style={{color:'#fff'}}>{item.points}</Text>
							</View>
						)
						}
					}
					keyExtractor={(item, index) => index}
        />
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
    zIndex: 10,
    flexDirection:'row'
},
header2: {
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#0e9c8e',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderBottomWidth: 1,
  borderBottomColor: '#000',
  shadowColor: '#454d65',
  shadowOffset: { height: 5 },
  shadowRadius: 15,
  shadowOpacity: 0.2,
  zIndex: 10,
  flexDirection:'row'
},
headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: '#fff'
},
head: { 
  height: 50, 
  backgroundColor: '#0e9c8e' 
},
text: { 
  textAlign: 'center', 
  fontWeight: '200' ,
  color:'#fff'
},
dataWrapper: { 
  marginTop: -1 
},
row: { 
  height: 40, 
  backgroundColor: '#000' 
}
});