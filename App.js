import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Intro from './Intro';

export default function App() {
  const INITIAL_CAT = []
  const [cats, setCats] = useState(INITIAL_CAT);

  // const updateCats = async (temp) => {
  //   await AsyncStorage.setItem('cat', JSON.stringify(temp))
  //   setCats(temp);
  // }
  // const readData = async () => {
  //   try {
  //     // console.log("HIIIII")
  //     const value = await AsyncStorage.getItem('cat');
  
  //     if (value !== null) {
  //       setCats(value);
  //       // console.log(value);
  //     }
      
  //   } catch (e) {
  //     // console.log("failedddd")
  //     alert('Failed to fetch the input from storage');
  //   }
  // };

  useEffect(() => {
    const fetchTasks = async () =>{
      const saved = await AsyncStorage.getItem('cat');
      if(saved != null) setCats(JSON.parse(saved));
    }
    fetchTasks();
  }, []);
  
  return(
    
    <Intro cats={cats} setCats={setCats} />
    
  );
}