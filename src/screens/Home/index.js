import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';

import styles from './style';

export default function App() {
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