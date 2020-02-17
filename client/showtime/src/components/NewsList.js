import React from 'react';
import {List, ListItem, Button, Icon, Card} from '@ui-kitten/components';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  flex-direction: row;
  height: 100px;
`;
const Thumbnail = styled.View`
  width: 100px;
  flex-grow: 0;
`;
const ItemInfo = styled.View`
  flex-direction: row;
  padding: 10px;
  flex-grow: 1;
`;
const Footer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  margin-top: 10px;
`;
const Action = styled.View`
  flex-grow: 0;
  width: 100px;
`;
const Metadata = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

const StarIcon = style => {
  return <Icon name="star" />;
};

const NewsListItem = ({item}) => {
  return (
    <Card>
      <StyledListItem>
        <Content>
          <Thumbnail>
            <StyledImage source={{uri: item.thumbnail}} />
          </Thumbnail>
          <ItemInfo>
            <Text style={{flex: 1, flexWrap: 'wrap'}}>{item.description}</Text>
          </ItemInfo>
        </Content>
        <Footer>
          <Action>
            <LikeButton appearance="ghost" status="danger">
              Like
            </LikeButton>
          </Action>
          <Metadata>
            <Text>April 16 | by: user123 | views: 200</Text>
          </Metadata>
        </Footer>
      </StyledListItem>
    </Card>
  );
};

const StyledListItem = styled(ListItem)`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;

const NewsListStyle = styled.View`
  flex: 1;
`;

const LikeButton = styled(Button)`
  width: 80px;
  margin: 8px;
`;

const dummyItems = [
  {
    id: 1,
    create_at: Date.now(),
    create_by: '14324234234',
    title: 'Udi',
    description: 'lorem iplsum lorem ipsum... lore loeoeronm pidsum',
    type: 'COURSE',
    likes: [],
    thumbnail: 'https://api.adorable.io/avatars/285/abott@adorable.png',
  },
  {
    id: 1,
    create_at: Date.now(),
    create_by: '14324234234',
    title: 'Udi',
    description: 'dfgg33rere loeoeronm pidsum, lajsdaklsdja ,asdlkjasd',
    type: 'MEETUP',
    likes: [],
    thumbnail: 'https://api.adorable.io/avatars/285/',
  },
];

const NewsList = props => {
  return (
    <NewsListStyle>
      <List data={dummyItems} renderItem={NewsListItem} />
    </NewsListStyle>
  );
};

export default NewsList;
