import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const ScoreScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SafeAreaView>
      <Text category='h1'>score screen</Text>
    </SafeAreaView>
  </Layout>
);

export default ScoreScreen;
