import React from 'react';
import {List, ListItem} from '@ui-kitten/components';
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

const scoreListItem = ({item}) => {
  return (
    <ListItem title={item.name}>
      <StyledImage
        style={{width: 66, height: 58, marginRight: 20}}
        source={{
          uri: item.avatar,
        }}
      />
      <Username>{item.name}</Username>
      <Score>({item.score})</Score>
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
      <List data={dummyData} renderItem={scoreListItem} />
    </ScoreListStyle>
  );
};

export default ScoreList;
