import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const NewsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SafeAreaView>
      <Text category='h1'>news screen</Text>
    </SafeAreaView>
  </Layout>
);

export default NewsScreen;