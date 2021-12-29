import React from 'react';
import Home from "./src/screens/Home/";
import SignUp from "./src/screens/Auth/signUp";
import SignIn from "./src/screens/Auth/signIn";
import Dashboard from "./src/screens/Dashboard"
import Product from "./src/screens/Product"
import rideaux from "./src/screens/Product/rideaux"
import luminaire from "./src/screens/Product/luminaire"
import store from "./src/screens/Product/store"
import auth from "@react-native-firebase/auth"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
          <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
          <Stack.Screen name="Rideaux" component={rideaux} options={{headerShown: false}} />
          <Stack.Screen name="Luminaire" component={luminaire} options={{headerShown: false}} />
          <Stack.Screen name="Store" component={store} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
