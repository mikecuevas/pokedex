import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
    textTransform: 'capitalize'
  },
  pokemonNumber: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 20
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  typeBadge: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 20,
    textTransform: 'capitalize'
  },
  statsContainer: {
    width: '100%',
    alignItems: 'flex-start'
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%'
  },
  statName: {
    fontSize: 16,
    color: '#FFF',
    width: '30%',
    textTransform: 'capitalize'
  },
  statValue: {
    fontSize: 14,
    color: '#FFF',
    width: '20%',
    textAlign: 'right',
    marginRight: 10
  },
  statBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '50%'
  },
  statBarFill: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  pokemonDescription: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 15
  },
  movesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15
  },
  moveBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    textTransform: 'capitalize'
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  abilityText: {
    marginVertical: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pokemonCard: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    paddingBottom: 5
  },
});
