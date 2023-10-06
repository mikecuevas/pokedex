import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    padding: 20
  },
  pokemonDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  pokemonDetailNumber: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  typeLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 5,
    textTransform: 'capitalize' 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10
  },
  ability: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    marginLeft: 20
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10
  },
  statName: {
    fontSize: 18,
    color: 'white',
  },
  statValue: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
