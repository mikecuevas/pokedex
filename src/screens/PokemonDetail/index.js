import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  FlatList, 
} from 'react-native';
import { getPokemonDetails } from '../../api/pokemonAPI';
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

export default function PokemonDetail({ route }) {
  const { pokemonName } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const data = await getPokemonDetails(pokemonName);
        setPokemonDetails(data);
      } catch (error) {
        console.error(`Erro ao buscar detalhes do Pokémon ${pokemonName}:`, error);
      }
    };
    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <Text>Carregando...</Text>;
  }

  const mainType = pokemonDetails.types[0].type.name;

  return (
    <View style={[styles.container, { backgroundColor: typeColors[mainType] }]}>
      <Image
        source={{ uri: pokemonDetails.sprites.front_default }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>
        {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
      </Text>
      <Text style={styles.pokemonNumber}>#{String(pokemonDetails.id).padStart(4, '0')}</Text>
      <View style={styles.typesContainer}>
        {pokemonDetails.types.map(type => (
          <Text 
            key={type.type.name} 
            style={[styles.typeBadge, {backgroundColor: typeColors[type.type.name]}]}
          >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </Text>
        ))}
      </View>
      <View style={styles.statsContainer}>
        {pokemonDetails.stats.map(stat => (
          <View key={stat.stat.name} style={styles.statRow}>
            <Text style={styles.statName}>{stat.stat.name.toUpperCase()}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${(stat.base_stat / 200) * 100}%` }]} />
            </View>
            <Text style={styles.statValue}>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
