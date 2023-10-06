import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F', 
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    backgroundColor: '#B71C1C', 
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    elevation: 4
  },
  searchIconPlaceholder: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#555'
  },
  pokemonCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
  },
  pokemonImagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 20
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  pokemonNumber: {
    color: '#aaa'
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  details: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  placeholder: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#D32F2F',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  prevButton: {
    backgroundColor: '#B71C1C',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5
  },
  nextButton: {
    backgroundColor: '#B71C1C',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
});

export default styles;
