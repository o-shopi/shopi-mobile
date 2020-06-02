import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#46AB99" />
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
