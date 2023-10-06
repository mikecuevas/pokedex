import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity,
  Image
} from 'react-native';
import { useState, useEffect } from 'react';
import { getPokemonList } from '../../api/pokemonAPI';
import styles from './style';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error("Erro ao buscar lista de Pokémon:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Pokédex</Text>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchIconPlaceholder}></View>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
        />
      </View>

      <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.pokemonCard}
            onPress={() => navigation.navigate('PokemonDetail', { pokemonName: item.name })}
          >
            <Image 
                style={styles.pokemonImage}
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png` }}
            />
            <Text style={styles.pokemonName}>{capitalizeFirstLetter(item.name)}</Text>
            <Text style={styles.pokemonNumber}># {item.url.split('/')[6]}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.url}
      />
    </View>
  );
}
