import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Table from '../League Table Stepup/Table'
import styled from 'styled-components/native';

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