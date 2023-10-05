import { StyleSheet, Platform, StatusBar} from 'react-native'; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  // Adicione isto aqui
  },
    titleBar: {
      height: 50,
      backgroundColor: '#FF3232',  // Vibrant Red color
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      color: 'white',
      fontSize: 24,  // Increased font size
      fontWeight: 'bold',
    },
    searchBar: {
      padding: 10,
      flexDirection: 'row',  // Added for alignment of icon and input
      alignItems: 'center',  // Align items vertically
    },
    searchInput: {
      backgroundColor: 'white',
      height: 40,
      flex: 1,  // Take available space
      borderRadius: 20,
      paddingHorizontal: 15,
      borderColor: '#E0E0E0',  // Light border color
      borderWidth: 1,  // Border width
      shadowColor: '#000',  // Shadow properties for depth effect
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
      marginRight: 10,  // Space between icon and input
    },
    
    // Placeholder for the search icon (this is a dummy representation, we'd need to use an actual icon in the real implementation)
    searchIconPlaceholder: {
      width: 20,
      height: 20,
      backgroundColor: 'gray',
      borderRadius: 10,
      marginRight: 10,
    },
    pokemonCard: {
      flexDirection: 'row',  // For alignment of image and texts
      alignItems: 'center',  // Align items vertically
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,  // Rounded corners
      marginVertical: 5,  // Space between cards
      marginHorizontal: 10,  // Horizontal margin for card spacing
      shadowColor: '#000',  // Shadow properties for depth effect
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
    },
    pokemonName: {
      fontSize: 18,
      flex: 1,  // Allow name to take available space
      marginLeft: 10,  // Space between image and name
    },
    pokemonNumber: {
      color: 'gray',
    },
    
    // Placeholder for the Pokemon image/icon (this is a dummy representation, we'd need to use an actual image/icon in the real implementation)
    pokemonImagePlaceholder: {
      width: 40,
      height: 40,
      backgroundColor: 'gray',
      borderRadius: 20,
    },
    details: {
      flex: 1,
      backgroundColor: 'white',
      padding: 15,
      alignItems: 'center',
    },
    detailsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
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
    },
    prevButton: {
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10,
    },
    nextButton: {
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
    },
  });

export default styles;
