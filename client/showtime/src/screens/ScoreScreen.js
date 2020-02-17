import React from 'react';
import { Layout, Text, TopNavigation } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import ScoreList from '../components/ScoreList';

const ScoreScreen = () => (
  <Layout style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Score Table"
        alignment="center"
      />
      <ScoreList/>
    </SafeAreaView>
  </Layout>
);

export default ScoreScreen;
