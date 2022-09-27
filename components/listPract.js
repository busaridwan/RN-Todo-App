import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ListPract() {

  const [age, setAge] = useState(24);

  const [name, setName] = useState('Ridwan');
  const [people, setPeople] = useState({
    name: 'Ridwan',
    age: 25
  });
const [peop, setPeop] = useState([
{name: "Ridwan", id: 1},
{name: "Umar", id: 2},
{name: "Bose", id: 3},
{name: "Dolapo", id: 4},
{name: "Oyin", id: 5},
{name: "Jo",id: 6},
{name: "Bukola",id: 7}
]);

const clickHandler = () => {
  setAge(30);
}
const pressHandler = (id) => {
  setPeop((prevPeop) => {
    return prevPeop.filter(person => person.id != id);
  })
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>header</Text>
      </View>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>She is {age} by age</Text>
        <Text>I am {people.age} years old</Text>
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TextInput style={styles.input} placeholder='Enter Name' onChangeText={setName}></TextInput> 
      <TextInput style={styles.input} placeholder='Enter Age' onChangeText={setName} keyboardType='numeric'></TextInput> 
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <ScrollView>
        { peop.map(item =>  (
            <View key={item.id}>
              <TouchableOpacity>
              <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )
        )}
        
      </ScrollView>
      <FlatList 
      numColumns={2} 
      keyExtractor={(item)=> item.id} 
      data={peop} 
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )} />
      </View>
      <View>
        <Button title='Set Name' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'pink',
    padding: 20
  },
  input: {
    borderColor: '#777',
    borderWidth: 0.5,
    width: '40%',
    margin: 10,
    height: 35,
    borderRadius: 5,
    paddingLeft: 10
  },
  item: {
    margin: 5,
    padding: 5,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'pink'
  }
});
