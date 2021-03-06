import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {gql} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {
  //   Header,
  //   LearnMoreLinks,
  Colors,
  //   DebugInstructions,
  //   ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider as StoreProvider} from 'react-redux';
import {Router} from './routes';
import {createStore} from './store';

const store = createStore();
import apolloClient from './services/apolloClient';

console.disableYellowBox = true;

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <StoreProvider store={store}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Router />
        </ApplicationProvider>
      </StoreProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
