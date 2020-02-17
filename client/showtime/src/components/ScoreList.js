import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from '@ui-kitten/components';
import styled from 'styled-components/native';

const Username = styled.Text`
  font-weight: bold;
  margin-right: 10px;
`;

const Score = styled.Text`
  font-weight: 100;
`;

const StyledImage = styled.Image`
  width: 66;
  height: 58;
  margin-right: 20;
`;

const scoreListItem = ({ item, index }) => {
  return (
    <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }} title={item.name}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginRight: 10 }} category='h5'>{`${index + 1})`}</Text>
        <StyledImage
          style={{ width: 54, height: 54, marginRight: 20, borderRadius: 27 }}
          source={{
            uri: item.avatar,
          }}
        />
        <Text category='h4'>{item.name}</Text>
      </View>
      <Text category='h3'>{item.score}</Text>
    </ListItem>
  );
};

const ScoreListStyle = styled.View`
  flex: 1;
`;

const dummyData = [
  {
    id: 1,
    name: 'Udi',
    score: 100,
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
  },
  {
    id: 1,
    name: 'Erez',
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    score: 100,
  },
  {
    id: 1,
    name: 'Haggai',
    avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
    score: 100,
  },
];

const ScoreList = props => {
  return (
    <ScoreListStyle>
      <List data={dummyData} renderItem={scoreListItem}/>
    </ScoreListStyle>
  );
};

export default ScoreList;
