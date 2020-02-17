import React from 'react';
import { View, FlatList } from 'react-native';
import { Layout, Text, Avatar, ListItem } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ user }) => {
  const profile = useSelector(state => state.user.profile)
  return (
    <Layout style={{ flex: 1, justifyContent: 'center' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 200, backgroundColor: 'blue' }}>
          <Text style={{ color: 'white', alignSelf: 'center', paddingTop: 30 }}
                category='h1'>{profile.fullName}</Text>
          <Avatar
            size='giant'
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 150,
              width: 150,
              alignSelf: 'center',
              position: 'absolute',
              top: 125
            }}
            source={{ uri: 'https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg' }}
          />
        </View>
        <View style={{paddingHorizontal: 30, paddingTop:100}}>
          <Text style={{ color: 'black' }} category='h3'>Score: {profile.score}</Text>
          <Text style={{ color: 'black' }} category='h3'>Level: {profile.level}</Text>
          
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default ProfileScreen;
