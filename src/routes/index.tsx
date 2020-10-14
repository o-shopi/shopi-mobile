import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Search from '../pages/Search';
import ProductDetails from '../pages/ProductDetails';
import Reserve from '../pages/Reserve';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Search" component={Search} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="ProductDetails" component={ProductDetails} />
    <Auth.Screen name="Reserve" component={Reserve} />
  </Auth.Navigator>
);

export default AuthRoutes;
