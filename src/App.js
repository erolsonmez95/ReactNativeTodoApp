import React, {useState,useEffect} from 'react';
import {FlatList, View, StyleSheet, Alert} from 'react-native';
import AddTodo from './components/AddTodo/index';
import Header from './components/Header/index';
import TodoItem from './components/TodoItem/index';

const App = () => {
  const [list, setList] = useState([]);
  const [todoName, setTodoName] = useState('');

 

  const renderTodoItem = ({item}) => <TodoItem item={item}></TodoItem>;

  return (
    <View style={styles.container}>
      <Header list={list} />

      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderTodoItem}
      />

      <View style={{justifyContent: 'flex-end'}}>
        <AddTodo
          text={todoName}
          list={list}
          setList={setList}
          setTodoName={setTodoName}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273842',
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
