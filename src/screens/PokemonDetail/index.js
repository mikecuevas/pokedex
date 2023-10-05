<<<<<<< HEAD
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

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.pokemonDetailName}>{pokemonData.name}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemonData.sprites.front_default }} style={styles.pokemonImage} />
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
=======
<View style={styles.detailsContainer}>

  {/* Imagem do Pokémon */}
  <View style={styles.imagePlaceholder}></View>
  
  {/* Nome e Número */}
  <Text style={styles.pokemonDetailName}>Pikachu</Text>
  <Text style={styles.pokemonDetailNumber}>#025</Text>
  
  {/* Tipos */}
  <View style={styles.typesContainer}>
    <Text style={styles.typeLabel}>Elétrico</Text>
  </View>
  
  {/* Habilidades */}
  <Text style={styles.sectionTitle}>Habilidades</Text>
  <Text style={styles.ability}>Choque Estático</Text>
  
  {/* Estatísticas */}
  <Text style={styles.sectionTitle}>Estatísticas</Text>
  <Text style={styles.stat}>Ataque: 55</Text>
  <Text style={styles.stat}>Defesa: 40</Text>
  
  {/* Descrição */}
  <Text style={styles.sectionTitle}>Descrição</Text>
  <Text style={styles.description}>Pikachu é um Pokémon do tipo elétrico. É conhecido por sua capacidade de gerar eletricidade e usar movimentos como Choque do Trovão.</Text>

</View>
>>>>>>> 0c67ffbf93bb68b2c22c1ea5827bc6af9cf0a4c2
