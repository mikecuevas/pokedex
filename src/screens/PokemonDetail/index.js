import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image 
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

function PokemonDetail({ route }) {
  const [pokemonData, setPokemonData] = useState(null);
  
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const data = await getPokemonDetails(route.params.pokemonName);
        setPokemonData(data);
      } catch (error) {
        console.error(`Erro ao buscar detalhes do Pokémon:`, error);
      }
    };

    fetchPokemonDetails();
  }, [route.params.pokemonName]);

  if (!pokemonData) return <Text>Carregando...</Text>;

  const mainType = pokemonData.types[0].type.name;
  const backgroundColor = typeColors[mainType] || '#BDBDBD';
  return (
    <View style={{ ...styles.detailsContainer, backgroundColor }}>

      {/* Nome e Número */}
      <Text style={styles.pokemonDetailName}>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</Text>
      <Text style={styles.pokemonDetailNumber}>#{pokemonData.id}</Text>

      {/* Imagem do Pokémon */}
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png` }}
        style={styles.pokemonImage}
      />

      {/* Tipo(s) do Pokémon */}
      <View style={styles.typesContainer}>
        {pokemonData.types.map(typeData => (
          <Text key={typeData.type.name} style={[styles.typeLabel, { backgroundColor: typeColors[typeData.type.name] }]}>
            {typeData.type.name.charAt(0).toUpperCase() + typeData.type.name.slice(1)}
          </Text>
        ))}
      </View>

      {/* Habilidades */}
      <Text style={styles.sectionTitle}>Habilidades</Text>
      {pokemonData.abilities.map(abilityData => (
        <Text key={abilityData.ability.name} style={styles.ability}>
          {abilityData.ability.name.charAt(0).toUpperCase() + abilityData.ability.name.slice(1)}
        </Text>
      ))}

      {/* Estatísticas */}
      <Text style={styles.sectionTitle}>Estatísticas</Text>
      {pokemonData.stats.map(statData => (
        <View key={statData.stat.name} style={styles.statContainer}>
          <Text style={styles.statName}>
            {statData.stat.name.charAt(0).toUpperCase() + statData.stat.name.slice(1)}
          </Text>
          <Text style={styles.statValue}>
            {statData.base_stat}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default PokemonDetail;
