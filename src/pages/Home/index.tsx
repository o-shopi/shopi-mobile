import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';

import Category from '../../components/Category';
import Adverts from '../../components/Adverts';
import ProductCarousel from '../../components/ProductCarousel';

import blueShirt from '../../assets/camisa-azul.png';
import redShirt from '../../assets/camisa-vermelha.png';
import whiteShirt from '../../assets/camisa-branca.png';

import redShoe from '../../assets/allstarvermelho.png';
import blueShoe from '../../assets/tenisazul.png';
import whiteShoe from '../../assets/adidas.png';

import {
  HomeWrapper,
  AdvertsWrapper,
  CategoryWrapper,
  ShirtsCarouselTextWrapper,
  CarouselTitle,
  CarouselSubTitle,
  Image,
  ProductDescriptionWrapper,
  ProductActions,
  ProductMall,
  ProductStore,
  ProductName,
  ReserveButton,
  ReserveButtonText,
  PriceText,
} from './styles';

interface Product {
  title: string;
  store: string;
  price: string;
  img: any;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const shirts: Product[] = [
    {
      title: 'Camisa azul',
      store: 'Loja Mariza',
      price: 'R$100,00',
      img: whiteShirt,
    },
    {
      title: 'Camisa azul',
      store: 'Loja GAPI',
      price: 'R$100,00',
      img: blueShirt,
    },
    {
      title: 'Camisa vermelha',
      store: 'Loja Mariza',
      price: 'R$100,00',
      img: redShirt,
    },
  ];

  const shoes: Product[] = [
    {
      title: 'All Star Vermelho',
      store: 'Loja Centouro',
      price: 'R$150,00',
      img: redShoe,
    },
    {
      title: 'Tênis Azul',
      store: 'Loja Mariza',
      price: 'R$125,00',
      img: blueShoe,
    },
    {
      title: 'Adidas Superstar',
      store: 'Loja Estrelas',
      price: 'R$200,00',
      img: whiteShoe,
    },
  ];

  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView
          style={{ position: 'relative', overflow: 'visible' }}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          <HomeWrapper>
            <CategoryWrapper>
              <View
                style={{
                  width: 66,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Category img="shirt" />
                <Text style={{ top: -28 }}>Camisetas</Text>
              </View>
              <View
                style={{
                  width: 66,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Category img="balloon" />
                <Text style={{ top: -28 }}>Viajar</Text>
              </View>
              <View
                style={{
                  width: 66,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Category img="furniture" />
                <Text style={{ top: -28 }}>Sofá</Text>
              </View>
              <View
                style={{
                  width: 66,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Category img="burger" />
                <Text style={{ top: -28 }}>Fast Food</Text>
              </View>
              <View
                style={{
                  width: 66,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Category img="game" />
                <Text style={{ top: -28 }}>Jogos</Text>
              </View>
            </CategoryWrapper>
            <AdvertsWrapper>
              <Adverts />
            </AdvertsWrapper>

            <View style={{ padding: 16 }}>
              <ShirtsCarouselTextWrapper>
                <CarouselTitle>Camisas</CarouselTitle>
                <CarouselSubTitle>+ ver mais</CarouselSubTitle>
              </ShirtsCarouselTextWrapper>
              <ProductCarousel products={shirts} />
            </View>

            <View>
              <ShirtsCarouselTextWrapper>
                <CarouselTitle>Tênis</CarouselTitle>
                <CarouselSubTitle>+ ver mais</CarouselSubTitle>
              </ShirtsCarouselTextWrapper>
              <ProductCarousel products={shoes} />
            </View>
          </HomeWrapper>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
