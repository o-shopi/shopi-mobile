import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native';
import Header from '../../components/Header';

const Search: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </>
  );
};

export default Search;
