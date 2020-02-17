import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const ProfileScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SafeAreaView>
      <Text category='h1'>profile screen</Text>
    </SafeAreaView>
  </Layout>
);

export default ProfileScreen;
