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
              <Text style={styles.headerTitle2}>
                Pos
              </Text>
              <Text style={styles.headerTitle2}>
                Team
              </Text>
              <Text style={styles.headerTitle2}>
                W
              </Text>
              <Text style={styles.headerTitle2}>
                D
              </Text>
              <Text style={styles.headerTitle2}>
                L
              </Text>
              <Text style={styles.headerTitle2}>
                GD
              </Text>
              <Text style={styles.headerTitle2}>
                GP
              </Text>
              <Text style={styles.headerTitle2}>
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
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10, marginLeft:30}}>{item.pos}</Text>
							
              	<Image
              source={{ uri: item.logo }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 30, height: 30, paddingBottom:10, paddingTop:10 }}
            />
                <Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.name}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.gamesPlayed}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.won}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.draw}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.lost}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.goalDiff}</Text>
								<Text style={{color:'#fff', paddingBottom:10, paddingTop:10}}>{item.points}</Text>
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
headerTitle2: {
  fontSize: 20,
  fontWeight: "500",
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