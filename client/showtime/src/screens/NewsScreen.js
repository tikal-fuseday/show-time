import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import NewsList from '../components/NewsList';

const NewsScreen = () => (
  <Layout style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
      <Text style={{alignSelf:'center'}}category="h1">News</Text>
      <NewsList />
    </SafeAreaView>
  </Layout>
);

export default NewsScreen;
