import React from 'react';
import {List, ListItem, Button, Card, Text} from '@ui-kitten/components';
import styled from 'styled-components/native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {View} from 'react-native';
const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50;
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

const getAllItems = gql`
  {
    item {
      thumbnail
      id
      title
      description
      likes {
        email
        id
        is_admin
      }
      created_at
    }
  }
`;

const NewsListItem = ({item}) => {
  return (
    <Card>
      <StyledListItem>
        <Content>
          <Thumbnail>
            <StyledImage source={{uri: item.thumbnail}} />
          </Thumbnail>
          <ItemInfo>
            <View style={{flex: 1, border: '4px solid red'}}>
              <Text
                allowFontScaling={false}
                flexWrap="wrap"
                category="h6"
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{flex: 1}}>
                {item.title}
              </Text>
            </View>
            <Text category="s1" style={{flex: 1, flexWrap: 'wrap'}}>
              {item.description}
            </Text>
          </ItemInfo>
        </Content>
        <Footer>
          <Action>
            <LikeButton appearance="ghost" status="danger">
              Like({item.likes.length})
            </LikeButton>
          </Action>
          <Metadata>
            <Text>{item.created_at} | by: user123 | views: 200</Text>
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
  width: 110px;
  margin: 8px;
`;

const NewsList = props => {
  const {data, loading, error} = useQuery(getAllItems);
  return (
    <NewsListStyle>
      {!loading && <List data={data.item} renderItem={NewsListItem} />}
    </NewsListStyle>
  );
};

export default NewsList;
