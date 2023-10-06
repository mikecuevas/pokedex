import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getPokemonList, getPokemonDetails } from '../../api/pokemonAPI';
import styles from './style';

const typeColors = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC'
};


export default function Home({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();

        const detailedData = await Promise.all(
          data.map(async pokemon => {
            const details = await getPokemonDetails(pokemon.name);
            return {
              ...pokemon,
              types: details.types,
              imageUrl: details.sprites.front_default
            };
          })
        );

        setPokemonList(detailedData);
      } catch (error) {
        console.error("Erro ao buscar lista de Pokémon:", error);
      }
    };
    fetchPokemonList();
  }, []);

  const filteredPokemonList = searchText
    ? pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : pokemonList;

    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Pokédex</Text>
        </View>
      
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      
        <FlatList
          data={filteredPokemonList}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.pokemonCard}
              onPress={() => navigation.navigate('PokemonDetail', { pokemonName: item.name })}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.pokemonImage}
              />
              <Text style={styles.pokemonName}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={styles.pokemonNumber}>
                #{String(item.url.split('/')[6]).padStart(4, '0')}
              </Text>
              <View style={styles.typesContainer}>
                {item.types.map(type => (
                  <Text 
                    key={type.type.name} 
                    style={[
                      styles.typeBadge, 
                      {backgroundColor: typeColors[type.type.name] || '#ccc'}
                    ]}
                  >
                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.url}
        />
      </View>
    );    
}
