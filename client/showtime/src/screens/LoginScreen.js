import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const LoginScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SafeAreaView>
      <Text category='h1'>login screen</Text>
    </SafeAreaView>
  </Layout>
);

export default LoginScreen;