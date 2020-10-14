import React from 'react';
import { Image, SafeAreaView, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backArrowImg from '../../assets/back-arrow.png';
import ticketImg from '../../assets/ticket.png';

import { Container, BackButton } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: '100%' }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Container>
          <BackButton
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            <Image source={backArrowImg} style={{ height: 17, width: 17 }} />
          </BackButton>
          <Text
            style={{
              color: '#487B71',
              fontSize: 24,
              fontFamily: 'Ubuntu-Regular',
              letterSpacing: 0.08,
              position: 'absolute',
              left: 25,
              top: 85,
            }}
          >
            Reservas
          </Text>

          <Text
            style={{
              color: '#7b7b7b',
              fontSize: 18,
              fontFamily: 'Ubuntu-Regular',
              letterSpacing: 0.08,
              position: 'absolute',
              left: 27,
              top: 150,
            }}
          >
            A ser retirado:
          </Text>

          <Image
            source={ticketImg}
            style={{ position: 'absolute', top: 195, left: 23 }}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
