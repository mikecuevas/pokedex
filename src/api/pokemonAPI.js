import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async (limit = 50) => {
  try {
    const response = await api.get(`/pokemon?limit=${limit}`);
    const pokemonList = response.data.results;

    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const details = await getPokemonDetails(pokemon.name);
        return {
          ...pokemon,
          details: details
        };
      })
    );

    return detailedPokemonList;
  } catch (error) {
    console.error("Erro ao buscar a lista de Pokémon:", error);
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await api.get(`/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do Pokémon ${pokemonName}:`, error);
    throw error;
  }
};
