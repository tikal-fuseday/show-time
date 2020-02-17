import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import ScoreList from '../components/ScoreList';
const ScoreScreen = () => (
  <Layout style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
      <Text category="h1">score screen</Text>
      <ScoreList />
    </SafeAreaView>
  </Layout>
);

export default ScoreScreen;
