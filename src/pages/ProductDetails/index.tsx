import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, {
  ParallaxImage,
  ParallaxImageProps,
  Pagination,
} from 'react-native-snap-carousel';

import backArrowImg from '../../assets/back-arrow.png';
import qrCodeImg from '../../assets/codigo-qr-green.png';

import { PageControls, BackButton, QrCodeButton } from './styles';

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

  const carouselState = {
    activeIndex: 0,
    pictures,
  };

  const { width: screenWidth } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      width: screenWidth,
      height: screenWidth - 15,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
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
              backgroundColor: 'rgba(225, 225, 225, 0.92)',
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
          <BackButton>
            <Image source={backArrowImg} style={{ height: 17, width: 17 }} />
          </BackButton>

          <QrCodeButton>
            <Image source={qrCodeImg} style={{ height: 30, width: 30 }} />
          </QrCodeButton>
        </PageControls>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
