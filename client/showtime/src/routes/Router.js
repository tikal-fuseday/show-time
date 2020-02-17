import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Routes from './Routes';
// import Icon from 'react-native-vector-icons/Ionicons';


import LoginScreen from '../screens/LoginScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScoreScreen from '../screens/ScoreScreen';
import AdminScreen from '../screens/AdminScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Routes.ScoreScreen}
          component={ScoreScreen}
          options={{
            tabBarLabel: 'Score',
            // tabBarIcon: ({ color, size }) => (
            //   <Icon name={'hello'} />
            // )
          }}
        />
        <Tab.Screen
          name={Routes.NewsScreen}
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
          }}
        />
        <Tab.Screen
          name={Routes.ProfileScreen}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        {/*<Tab.Screen*/}
        {/*  name={Routes.AdminScreen}*/}
        {/*  component={AdminScreen}*/}
        {/*  options={{*/}
        {/*    tabBarLabel: 'Admin',*/}
        {/*  }}*/}
        {/*/>*/}
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Router;