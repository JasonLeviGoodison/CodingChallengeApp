import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Intro from './Intro';

export default function App() {
  let res;
  const findCat = async () => {
     res = await AsyncStorage.getItem('cat') 
    console.log(res);
  };

  useEffect(() => {
    findCat();
  }, []);
  
  return (
    <Intro/>
    
  );
}