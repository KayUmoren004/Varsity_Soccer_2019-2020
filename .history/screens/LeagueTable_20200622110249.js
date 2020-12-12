import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";
import { Divider } from "react-native-paper";

export default class LeagueTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Head", "Head2", "Head3", "Head4", "Head5", "Head6", "Head7"],
      widthArr: [100, 40, 40, 40, 40, 40, 40],
      table: [],
    };
  }

  componentDidMount() {
    fetch("https://next.json-generator.com/api/json/get/N1vgN3uTO")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          table: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _renderTable = ({item}) => {
    return(
      

          <View
                style={{ flexDirection: "row", 
                /*0justifyContent: 'space-between'*/ }}
              >
                <Text
                  style={{
                    color: "#fff",
                    paddingBottom: 10,
                    paddingTop: 10,
                    //marginLeft: 25,
                  }}
                >
                  {item.pos}
                </Text>

                <Image
                  source={{ uri: item.logo }}
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    paddingBottom: 10,
                    paddingTop: 10,
                    //marginLeft: 10,
                  }}
                />
                <View>
                <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10, flex:5}}
                >
                  {item.name}
                </Text>
                </View>
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                    /*marginLeft: 50,*/flex:1 }}
                >
                  {item.gamesPlayed}
                </Text>
               </View>
                
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                   /* marginLeft: 10,*/ }}
                >
                  {item.won}
                </Text>
               </View>
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                   /* marginLeft: 10,*/ }}
                >
                  {item.draw}
                </Text>
               </View>
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                   /* marginLeft: 10,*/ }}
                >
                  {item.lost}
                </Text>
               </View>
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                   /* marginLeft: 10,*/ }}
                >
                  {item.goalDiff}
                </Text>
               </View>
               <View>
               <Text
                  style={{ color: "#fff", paddingBottom: 10, paddingTop: 10,
                   /* marginLeft: 10,*/ }}
                >
                  {item.points}
                </Text>
               </View>
              </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Combined Suburban Council League Table
          </Text>
        </View>
        <View style={styles.header2}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:10 }}>
            Pos
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:10 }}>
            Team
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:65 }}>
            GP
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:20 }}>
            W
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:20 }}>
            D
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:20 }}>
            L
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:20 }}>
            GD
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", marginLeft:20 }}>
            PTS
          </Text>
          </View>

        <FlatList
          data={this.state.table}
          ItemSeparatorComponent={() => (
            <Divider
              style={{
                backgroundColor: "#fff",
                marginBottom: 10,
                marginTop: 10,
              }}
            />
          )}
          renderItem={this._renderTable}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    paddingTop: 36,
    paddingBottom: 16,
    backgroundColor: "#0e9c8e",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowColor: "#454d65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    flexDirection: "row",
  },
  header2: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#0e9c8e",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowColor: "#454d65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  headerTitle2: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  head: {
    height: 50,
    backgroundColor: "#0e9c8e",
  },
  text: {
    textAlign: "center",
    fontWeight: "200",
    color: "#fff",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: "#000",
  },
});