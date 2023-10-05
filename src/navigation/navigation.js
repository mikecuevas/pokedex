import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home/index';
import PokemonDetail from '../../src/screens/PokemonDetail/index';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ title: 'Detalhes do Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
