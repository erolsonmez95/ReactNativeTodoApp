import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    padding: 7,
    fontSize: 20
  },
  unDone: {
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'green',
    padding: 13,
  },

  done: {
    borderRadius: 5,
    color: 'grey',
    backgroundColor: '#373842',
    padding: 13,
    textDecorationLine: 'line-through'
    
  },
});
