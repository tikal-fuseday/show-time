import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import ScoreList from '../components/ScoreList';

const ScoreListScreen = () => (
  <Layout style={{flex: 1}}>
    <Text category="h1">ScoreList</Text>
    <ScoreList />
  </Layout>
);

export default ScoreListScreen;
