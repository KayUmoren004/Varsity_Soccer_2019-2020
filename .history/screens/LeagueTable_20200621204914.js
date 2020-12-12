import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Table from '../League Table Stepup/Table'
import styled from 'styled-components/native';
import Loading from '../League Table Stepup/Loading';
const StyledView = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-width: 1px;
	border-style: solid;
	paddingTop: 36px;
    paddingBottom: 16px;
  backgroundColor:#0e9c8e;
;
    
`;

const StyledView2 = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: #fff;
	border-bottom-width: 1px;
	border-style: solid;
	paddingTop: 16px;
 paddingBottom: 16px;
  backgroundColor:#000;
;
    
`;

const InfoText = styled.Text`
  color: #fff;
	font-size: 12px;
	flex: 1;
  fontSize: 15px;
    font-weight: 500;
	
`;

const TeamText = styled.Text`
  color:  #fff;
	font-size: 12px;
	flex: 5;
  fontSize: 15px;
    font-weight: 500;
	
	
`;

const TeamLogo = styled.Text`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`;

const ContainerView = styled.View`
backgroundColor:#000;

`;



export default class LeagueTable extends React.Component {
  state = {
    table: [],
  };

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
    if(this.state.table.length == 0) {
      return <Loading />;
   }
    return (
      <View>

      
			<StyledView>
				<TeamLogo/>
				<TeamText>Team</TeamText>
				<InfoText>PL</InfoText>
				<InfoText>W</InfoText>
				<InfoText>D</InfoText>
				<InfoText>L</InfoText>
				<InfoText>GD</InfoText>
				<InfoText>PTS</InfoText>
			</StyledView>

      <ContainerView>
        <FlatList
          data={
						this.state.table
					}
          renderItem={({item}) => {

					
						return (
							<StyledView2>
								<Image
              source={{ uri: item.logo }}
              resizeMethod="resize"
              resizeMode="contain"
              style={{ width: 30, height: 30, marginRight:10 }}
            />
								<TeamText>{item.name}</TeamText>
								<InfoText>{item.gamesPlayed}</InfoText>
								<InfoText>{item.won}</InfoText>
								<InfoText>{item.draw}</InfoText>
								<InfoText>{item.lost}</InfoText>
								<InfoText>{item.goalDiff}</InfoText>
								<InfoText>{item.points}</InfoText>
							</StyledView2>
						)
						}
					}
					keyExtractor={(item, index) => index}
        />
      </ContainerView>
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