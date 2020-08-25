import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, {
  ParallaxImage,
  ParallaxImageProps,
  Pagination,
} from 'react-native-snap-carousel';
import { RadioButton, List } from 'react-native-paper';

import backArrowImg from '../../assets/back-arrow.png';
import qrCodeImg from '../../assets/codigo-qr-green.png';
import shareImg from '../../assets/compartilhar.png';

import {
  PageControls,
  BackButton,
  QrCodeButton,
  ProductInfoCard,
  ProductTitleWrapper,
  ProductTitle,
  ShoppingInfoText,
  SelectionBlock,
  SelectionBlockTitle,
  SelectBullet,
  ProductDetailsText,
  ReserveButton,
  ReserveButtonText,
} from './styles';

interface ParallaxProperties extends ParallaxImageProps {
  illustration: string;
  title: string;
  subtitle: string;
}

interface Product {
  title: string;
  subtitle: string;
  illustration: string;
}

const ProductDetails: React.FC = () => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const { width: screenWidth } = Dimensions.get('window');

  const pictures: Product[] = [
    {
      title: 'Camisa vermelho - Frente',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://assets2.repassa.com.br/fit-in/1024x0/filters:sharpen(0.5,0.5,true)/spree/products/226126/original/IMG_5555.JPG',
    },
    {
      title: 'Camisa vermelho - costa',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration:
        'https://assets2.repassa.com.br/fit-in/1024x0/filters:sharpen(0.5,0.5,true)/spree/products/226127/original/IMG_5556.JPG',
    },
    {
      title: 'Camisa vermelho - etiqueta',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration:
        'https://assets2.repassa.com.br/fit-in/1024x0/filters:sharpen(0.5,0.5,true)/spree/products/226128/original/IMG_5557.JPG',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [currentSize, setSize] = useState('M');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      width: screenWidth,
      height: screenWidth + 30,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }),
      backgroundColor: 'white',
      borderRadius: 0,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
    },
  });

  const renderItem = (
    { item, index }: any,
    parallaxProps: ParallaxProperties,
  ): JSX.Element => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth}
            data={pictures}
            renderItem={renderItem}
            hasParallaxImages
            onSnapToItem={(index) => {
              setActiveSlide(index);
            }}
          />
          <Pagination
            dotsLength={pictures.length}
            activeDotIndex={activeSlide}
            containerStyle={{
              backgroundColor: 'transparent',
              marginTop: -50,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 8,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>

        <PageControls>
          <BackButton
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            <Image source={backArrowImg} style={{ height: 17, width: 17 }} />
          </BackButton>

          <QrCodeButton>
            <Image source={qrCodeImg} style={{ height: 30, width: 30 }} />
          </QrCodeButton>
        </PageControls>

        <ProductInfoCard>
          <ProductTitleWrapper>
            <View style={{}}>
              <ProductTitle>Camisa Vermelha Feminina</ProductTitle>
              <ProductTitle>R$200,00</ProductTitle>
            </View>
            <Image source={shareImg} style={{ width: 23, height: 23 }} />
          </ProductTitleWrapper>
          <ShoppingInfoText>SHOPPING VILLA LOBOS | 2º ANDAR </ShoppingInfoText>
          <SelectionBlock>
            <SelectionBlockTitle>COR:</SelectionBlockTitle>
            <SelectBullet />
          </SelectionBlock>
          <SelectionBlock>
            <SelectionBlockTitle>TAMANHO:</SelectionBlockTitle>
            <RadioButton.Group
              onValueChange={(value) => setSize(value)}
              value={currentSize}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <RadioButton.Item
                  labelStyle={{
                    fontSize: 14,
                    color: '#61a899',
                    paddingLeft: 2,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#61a899',
                    borderRadius: 50,
                  }}
                  label="P"
                  value="P"
                />
                <RadioButton.Item
                  labelStyle={{
                    fontSize: 14,
                    color: '#61a899',
                    paddingLeft: 2,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#61a899',
                    borderRadius: 50,
                  }}
                  label="M"
                  value="M"
                />
                <RadioButton.Item
                  labelStyle={{
                    fontSize: 14,
                    color: '#61a899',
                    paddingLeft: 2,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#61a899',
                    borderRadius: 50,
                  }}
                  label="G"
                  value="G"
                />
              </View>
            </RadioButton.Group>
          </SelectionBlock>
          <List.AccordionGroup>
            <List.Accordion
              theme={{
                colors: {
                  text: '#7E7E7E',
                },
              }}
              style={{
                paddingLeft: 0,
                marginTop: 11,
                borderTopWidth: 1,
                borderTopColor: '#7E7E7E',
              }}
              titleStyle={{
                fontSize: 18,
              }}
              title="DESCRIÇÃO E DETALHES"
              id="1"
            >
              <ProductDetailsText>
                Blusa feminina Manga Longa Gola Laço Estampa Corações Marca: A
                Collection Material: Poliéster Composição: 100% Poliéster
                Composição Forro: 100% Poliéster
              </ProductDetailsText>
            </List.Accordion>
            <List.Accordion
              theme={{
                colors: {
                  text: '#7E7E7E',
                },
              }}
              style={{
                paddingLeft: 0,
                borderTopWidth: 1,
                borderTopColor: '#7E7E7E',
              }}
              titleStyle={{
                fontSize: 18,
              }}
              title="COMPOSIÇÃO"
              id="2"
            >
              <ProductDetailsText>
                Blusa feminina Manga Longa Gola Laço Estampa Corações Marca: A
                Collection Material: Poliéster Composição: 100% Poliéster
                Composição Forro: 100% Poliéster
              </ProductDetailsText>
            </List.Accordion>

            <List.Accordion
              theme={{
                colors: {
                  text: '#7E7E7E',
                },
              }}
              style={{
                paddingLeft: 0,
                borderTopWidth: 1,
                borderTopColor: '#7E7E7E',
              }}
              titleStyle={{
                fontSize: 18,
              }}
              title="GARANTIA"
              id="3"
            >
              <ProductDetailsText>2 meses.</ProductDetailsText>
            </List.Accordion>
          </List.AccordionGroup>
        </ProductInfoCard>
        <ReserveButton>
          <ReserveButtonText>Reservar</ReserveButtonText>
        </ReserveButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
