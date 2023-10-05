<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> 0c67ffbf93bb68b2c22c1ea5827bc6af9cf0a4c2
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
<<<<<<< HEAD
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
=======

import styles from './style';

export default function App() {
>>>>>>> 0c67ffbf93bb68b2c22c1ea5827bc6af9cf0a4c2
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
<<<<<<< HEAD
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
=======
        data={[{name: 'Pikachu', number: '025'}, {name: 'Bulbasaur', number: '001'}]}  // Sample data
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.pokemonCard}>
            {/* Placeholder for the Pokemon image/icon */}
            <View style={styles.pokemonImagePlaceholder}></View>
            
            <Text style={styles.pokemonName}>{item.name}</Text>
            <Text style={styles.pokemonNumber}>#{item.number}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.number}
>>>>>>> 0c67ffbf93bb68b2c22c1ea5827bc6af9cf0a4c2
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
<<<<<<< HEAD
=======

>>>>>>> 0c67ffbf93bb68b2c22c1ea5827bc6af9cf0a4c2
    </View>
  );
}