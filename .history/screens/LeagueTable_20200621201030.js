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