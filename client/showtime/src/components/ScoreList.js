import React from 'react';
import {View, Text} from 'react-native';
import {List, ListItem} from '@ui-kitten/components';
import styled from 'styled-components/native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const StyledImage = styled.Image`
  width: 66;
  height: 58;
  margin-right: 20;
`;

const getUsers = gql`
  {
    user {
      id
      lname
      fname
      score
      avatar
    }
  }
`;

const scoreListItem = ({item}) => {
  return (
    <ListItem
      style={{flexDirection: 'row', justifyContent: 'space-between'}}
      title={item.name}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <StyledImage
          style={{width: 54, height: 54, marginRight: 20, borderRadius: 27}}
          source={{
            uri: item.avatar,
          }}
        />
        <Text category="h4">{item.fname}</Text>
      </View>
      <Text category="h3">{item.score}</Text>
    </ListItem>
  );
};

const ScoreListStyle = styled.View`
  flex: 1;
`;

const ScoreList = props => {
  const {loading, data, error} = useQuery(getUsers);
  return (
    <ScoreListStyle>
      <List data={data.user} renderItem={scoreListItem} />
    </ScoreListStyle>
  );
};

export default ScoreList;
