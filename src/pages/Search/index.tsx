import React from 'react';
import { SafeAreaView } from 'react-native';
import { Chip } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';

import blueShirt from '../../assets/camisa-azul.png';
import redShirt from '../../assets/camisa-vermelha.png';
import whiteShirt from '../../assets/camisa-branca.png';

import {
  SearchResult,
  ProductItem,
  InfoWrapper,
  ItemsWrapper,
  QuantityResultText,
  FilterButton,
  FilterButtonText,
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

const Search: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView
          style={{ position: 'relative', overflow: 'visible' }}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          <SearchResult>
            <InfoWrapper>
              <QuantityResultText>9 Resultados</QuantityResultText>
              <FilterButton>
                <FilterButtonText>Filtros</FilterButtonText>
              </FilterButton>
            </InfoWrapper>
            <ItemsWrapper>
              <ProductItem>
                <Image source={whiteShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING VILLA LOBOS</ProductMall>
                  <ProductStore>Loja Mariza</ProductStore>
                  <ProductName>Camisa azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$100,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              {/* massa de dados */}

              <ProductItem>
                <Image source={redShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING ELDORADO</ProductMall>
                  <ProductStore>Loja Remer</ProductStore>
                  <ProductName>Camisa Vermelha</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$199,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={blueShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING BOURBON</ProductMall>
                  <ProductStore>Loja GAPI</ProductStore>
                  <ProductName>Camisa Jeans Azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$200,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={whiteShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING VILLA LOBOS</ProductMall>
                  <ProductStore>Loja Mariza</ProductStore>
                  <ProductName>Camisa azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$100,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={redShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING ELDORADO</ProductMall>
                  <ProductStore>Loja Remer</ProductStore>
                  <ProductName>Camisa Vermelha</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$199,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={blueShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING BOURBON</ProductMall>
                  <ProductStore>Loja GAPI</ProductStore>
                  <ProductName>Camisa Jeans Azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$200,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={whiteShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING VILLA LOBOS</ProductMall>
                  <ProductStore>Loja Mariza</ProductStore>
                  <ProductName>Camisa azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$100,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={redShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING ELDORADO</ProductMall>
                  <ProductStore>Loja Remer</ProductStore>
                  <ProductName>Camisa Vermelha</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$199,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              <ProductItem>
                <Image source={blueShirt} />

                <ProductDescriptionWrapper>
                  <ProductMall>SHOPPING BOURBON</ProductMall>
                  <ProductStore>Loja GAPI</ProductStore>
                  <ProductName>Camisa Jeans Azul</ProductName>
                </ProductDescriptionWrapper>

                <ProductActions>
                  <Chip
                    style={{
                      width: 78,
                      height: 23,
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}
                    mode="outlined"
                  >
                    <PriceText>R$200,00</PriceText>
                  </Chip>
                  <ReserveButton>
                    <ReserveButtonText>Reservar</ReserveButtonText>
                  </ReserveButton>
                </ProductActions>
              </ProductItem>

              {/* fim da massa de dados */}
            </ItemsWrapper>
          </SearchResult>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
