import React, { useRef, useState } from 'react';
import Carousel, {
  ParallaxImage,
  ParallaxImageProps,
  Pagination,
} from 'react-native-snap-carousel';

import { StyleSheet, Platform, View, Dimensions } from 'react-native';
import bannerHomeImg from '../../assets/BannerHomeOffice.png';

import { Container, ButtonText, Image } from './styles';

interface ParallaxProperties extends ParallaxImageProps {
  title: string;
  img: any;
}

const Adverts: React.FC = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const [activeSlide, setActiveSlide] = useState(0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      width: 300,
      height: 117,
      borderRadius: 5,
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

  const banners = [
    { title: 'home office', img: bannerHomeImg },
    { title: 'home office 2', img: bannerHomeImg },
  ];

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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={117}
        itemWidth={305}
        data={banners}
        renderItem={renderItem}
        hasParallaxImages
        onSnapToItem={(index) => {
          setActiveSlide(index);
        }}
      />
      {/* <Pagination
        dotsLength={banners.length}
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
      /> */}
    </View>
  );
};

export default Adverts;
