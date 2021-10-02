import React from 'react';
import {View, TextInput, TouchableHighlight, Text, Alert} from 'react-native';
import styles from './AddTodo.styles';
import uuid from 'react-native-uuid';

const AddTodo = ({text, list, setList, setTodoName}) => {
  const handleClick = () => {
    if (text === '') {
      Alert.alert('Validation Error', 'Todo name required');
    } else {
      setList([...list, {id: uuid.v4(), name: text, isDone: false}]);
      setTodoName('');
    }
  };
  const handleChange = text => setTodoName(text);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak ..."
        onChangeText={handleChange}
        value={text}
      />
      <TouchableHighlight
        style={styles.submit}
        onPress={handleClick}
        underlayColor="#fff">
        <Text style={[10, styles.submitText]}>Kaydet</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddTodo;
