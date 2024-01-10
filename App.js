import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import {styles} from "./style"

export default function App() {

  const [items,setItems] = useState([])
  let input = ""

  

  function deleteItem(index){
     items.splice(index,1)
     setItems([...items])
  }

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input} type="text" placeholder='Enter item' onChangeText={(text) => { input = text }} />
      <Pressable style={styles.button} onPress={(event) => {

        if (input.length > 0){
          items.push(input)
          setItems([...items])
        }

        input = ""

      }} >
        <Text style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Add Item</Text>
      </Pressable>

      <ScrollView>
        {
          items.map((item, index) => {

            return (<View key={index} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
              <Pressable style={styles.itemButton} onPress={(event)=>deleteItem(index)} >
                <Text style={{fontWeight:"bold"}}>Delete</Text>
              </Pressable>
            </View>)
          })
        }
      </ScrollView>
    </View>
  );
}

