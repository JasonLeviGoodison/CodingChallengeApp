import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from "./Card";
import { CatStore } from '../CatStore';

export default function HomeScreen({navigation}) {
    const isEmptyCatArray = CatStore.useState(s => s.empty)
    const allCats = CatStore.useState(s => s.cats)
    console.log(allCats)
    return(
      <View>
      <ScrollView style = {{marginTop: 20}}>
        {allCats.map((cat, i) => (
          <TouchableOpacity 
            onPress = {() => navigation.navigate("Display Card", {
              data: cat,
              num: 2
            })
          }
          >
          <Card key={i}
          >
            <Text style = {catCardStyles.titleText}>{cat.name}</Text>
            <Text style = {catCardStyles.baseText}>{cat.breed}</Text>
            <Text style = {catCardStyles.baseText}>{cat.description}</Text>
          </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
        <Button title="add cat" onPress={() => {
          navigation.navigate('Create Cat')
        }}>
      </Button>
      </View>
    );
  };

  const catCardStyles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    image: {
      width: 50,
      height: 50,
    },
    cases:{
    }
  });