import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  pokemonImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  pokemonNumber: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  typeBadge: {
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
    alignSelf: 'center'
  },
  statsContainer: {
    flex: 1,
    marginTop: 20
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  statName: {
    flex: 1,
    fontSize: 16
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1
  },
  progress: {
    height: '100%',
    backgroundColor: '#3F51B5', // Cor da barra de progresso
    borderRadius: 5
  }
});
