import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';
const Header = ({list}) => {
  const calculateListLength = list => {
    let length = 0;
    list.forEach(item => {
      if (!item.isDone) {
        length++;
      }
    });
    return length;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{calculateListLength(list)}</Text>
    </View>
  );
};

export default Header;
