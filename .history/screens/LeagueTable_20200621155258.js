import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Table from '../League Table Stepup/Table'
import styled from 'styled-components/native';

const StyledView = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: #000;
	border-bottom-width: 1px;
	border-style: solid;
	paddingTop: 36px;
    paddingBottom: 16px;
  backgroundColor:#000;
    
`;

const InfoText = styled.Text`
  color: #fff;
	font-size: 12px;
	flex: 1;
  fontSize: 15;
    fontWeight: "500";
	
`;

const TeamText = styled.Text`
  color:  #fff;
	font-size: 12px;
	flex: 5;
	
`;

const TeamLogo = styled.Text`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`;


export default class LeagueTable extends React.Component {
  render(){
    return (
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