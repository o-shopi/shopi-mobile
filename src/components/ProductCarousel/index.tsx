import React, { useRef, useState } from 'react';
import { StyleSheet, Platform, View, Dimensions, Text } from 'react-native';

import Carousel, {
  ParallaxImage,
  ParallaxImageProps,
  Pagination,
} from 'react-native-snap-carousel';

import { Container, ButtonText, Image } from './styles';

interface ParallaxProperties extends ParallaxImageProps {
  title: string;
  store: string;
  price: string;
  img: any;
}

interface Product {
  title: string;
  store: string;
  price: string;
  img: any;
}

interface AdvertsProps {
  products: Product[];
}

const Adverts: React.FC<AdvertsProps> = ({ products }) => {
  const { width: screenWidth } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 15,
    },
    item: {
      width: 115,
      height: 198,
      borderRadius: 5,
      backgroundColor: 'white',
      padding: 10,
    },
    itemTitle: {
      fontFamily: 'Ubuntu-Regular',
      textAlign: 'center',
      fontSize: 11,
    },
    itemPrice: {
      fontFamily: 'Ubuntu-Bold',
      textAlign: 'center',
      fontSize: 11,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }),
      backgroundColor: 'white',
      borderRadius: 5,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'contain',
    },
  });

  const carouselRef = useRef(null);

  const renderItem = (
    { item, index }: any,
    parallaxProps: ParallaxProperties,
  ): JSX.Element => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.img}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemTitle}>{item.store}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={198}
        itemWidth={120}
        data={products}
        renderItem={renderItem}
        hasParallaxImages
        onSnapToItem={(index) => {
          setActiveSlide(index);
        }}
      />
      <Pagination
        dotsLength={products.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 8,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  );
};

export default Adverts;
