import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import {
  Theme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import Routes from './routes';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#46AB99',
    accent: '#EF7B7B',
  },
};

const App: React.FC = () => (
  <NavigationContainer>
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#46AB99" />
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Routes />
      </View>
    </PaperProvider>
  </NavigationContainer>
);

export default App;
