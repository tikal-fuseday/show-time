import React from 'react';
import { Layout, Text, TopNavigation, Input, Button } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';

const ScoreScreen = () => {
  const [courseScore, setCourseScore] = React.useState('');
  const [articleScore, setArticleScore] = React.useState('');
  const [meetupScore, setMeetupScore] = React.useState('');
  
  
  const onPressUpdate = () => {
    console.log('update');
  };
  
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title="Admin"
          alignment="center"
        />
        <View style={{ flex: 1, padding: 30 }}>
          <Input
            label='Course score'
            placeholder='50'
            value={courseScore}
            onChangeText={setCourseScore}
          />
          <View style={{ height: 30 }}/>
          <Input
            label='Article score'
            placeholder='30'
            value={articleScore}
            onChangeText={setArticleScore}
          />
          <View style={{ height: 30 }}/>
          <Input
            label='Meetup score'
            placeholder='30'
            value={meetupScore}
            onChangeText={setMeetupScore}
          />
        </View>
        <Button style={{marginBottom:30, marginHorizontal:30}} onPress={onPressUpdate}>
          {`Update`}
        </Button>
      </SafeAreaView>
    </Layout>
  );
}

export default ScoreScreen;
