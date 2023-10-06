import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import { getPokemonDetails } from '../../api/pokemonAPI';
import styles from './style';
import { Image } from 'react-native';




function PokemonDetail({ route }) {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemonName = route.params.pokemonName;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const data = await getPokemonDetails(pokemonName);
        setPokemonData(data);
      } catch (error) {
        console.error(`Erro ao buscar detalhes do Pokémon ${pokemonName}:`, error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonData) {
    return <Text>Carregando...</Text>;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.pokemonDetailName}>{capitalizeFirstLetter(pokemonData.name)}</Text>
      <View style={styles.imageContainer}>
      <Image 
        source={{ uri: pokemonData.sprites.front_default }} 
        style={styles.pokemonImage} 
      />
      </View>

      <View style={styles.typesContainer}>
        {pokemonData.types.map((type, index) => (
          <Text key={index} style={styles.typeLabel}>
            {type.type.name}
          </Text>
        ))}
      </View>

      <View style={styles.abilitiesContainer}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        {pokemonData.abilities.map((ability, index) => (
          <Text key={index} style={styles.ability}>
            {ability.ability.name}
          </Text>
        ))}
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Estatísticas</Text>
        {pokemonData.stats.map((stat, index) => (
          <Text key={index} style={styles.stat}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        ))}
      </View>

    </View>
  );
}

export default PokemonDetail;
