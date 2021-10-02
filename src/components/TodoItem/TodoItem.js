import React, { useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './TodoItem.styles';
const TodoItem = ({item}) => {
  const [currentState, setCurrentState] = useState(item.isDone);

 
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setCurrentState(!currentState);
        item.isDone = !item.isDone;
      }}>
      {
        <Text style={currentState ? styles.done : styles.unDone}>
          {item.name}
        </Text>
      }
    </TouchableOpacity>
  );
};

export default TodoItem;
