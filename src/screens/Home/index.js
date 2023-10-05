import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { getPokemonList  } from '../../api/pokemonAPI';
import styles from './style';

export default function Home({ navigation }) {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error("Erro ao buscar lista de Pokémon:", error);
        setError(error);
      }
    };

    fetchPokemonList();
  }, []);
  return (
    <View style={styles.container}>

      {/* Title Bar */}
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Pokédex</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>

        {/* Placeholder for the search icon */}
        <View style={styles.searchIconPlaceholder}></View>
        <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        />
      </View>

      {/* Pokemon List */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.pokemonCard}
            onPress={() => navigation.navigate('PokemonDetail', { pokemonName: item.name })}

          >
            <View style={styles.pokemonImagePlaceholder}></View>
            <Text style={styles.pokemonName}>{item.name}</Text>
            <Text style={styles.pokemonNumber}># {item.url.split('/')[6]}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.url}
      />

      {/* Pokemon Details */}
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Detalhes do Pokémon</Text>
        {/* Placeholder for Image */}
        <Text style={styles.placeholder}>Imagem</Text>
        <Text style={styles.placeholder}>Nome</Text>
        <Text style={styles.placeholder}>Tipo</Text>
        <Text style={styles.placeholder}>Descrição</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.prevButton}><Text style={styles.buttonText}>Anterior</Text></TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}><Text style={styles.buttonText}>Próximo</Text></TouchableOpacity>
      </View>
    </View>
  );
}