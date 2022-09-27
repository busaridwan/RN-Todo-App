import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header';
import Sandbox from './components/sandbox';
import TodoItem from './components/todoitem';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffe', key: 1},
    {text: 'create an app', key: 2}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
 
  const submitHandler = (text) => {
    if(text.length > 3){
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }else{
    Alert.alert('Oops!', 'Todos must be over 3 chars long', [
      {text: 'Ok', onPress: () => console.log('alert closed')}
    ])
  }
  }

  return (
    // <View style={styles.container}>
    //     <Sandbox />
    // </View>
    
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      
      <Header />
      {/* HEADER  */}
      <View style={styles.content}>
        {/* to form  */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}> 
          <FlatList data={todos} renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}/>
        </View>

      </View>

    </View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
