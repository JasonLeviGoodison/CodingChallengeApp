import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Pressable} from "react-native";
import styles from "../styles/cardStyles";
import Card from "./Card";
import { CatStore } from "../CatStore";
import Toast from 'react-native-root-toast';

export default function DisplayCard({route, navigation}) {
    const {data, num} = route.params;
	return (
		<ScrollView style = {{marginTop: 20}}>
            <Card>
                <Text style = {styles2.titleText}>{data.name}</Text>
                <Text style={{fontWeight:"bold"}}>Details</Text>
                <Text>{""}</Text>
                <View style={{flexDirection:"row", flexWrap: "wrap"}}>
                    <Text style={{color:"grey"}}>Breed:  </Text>
                    <Text>{data.breed}</Text>
                    <Text style={{color:"grey"}}>  Weight:  </Text>
                    <Text>{data.weight}</Text>
                </View>
            </Card>

            <Card>
                <Text style={styles2.subTitleText}>Characteristics</Text>
                <Text>{""}</Text>
                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <Text>{data.characteristics}</Text>
                </View>
            </Card>
            <Card>
                <Text style={styles2.subTitleText}>Description</Text>
                <Text>{""}</Text>
                <Text>{data.description}</Text>
            </Card>

            <View style={{flexDirection:"row", justifyContent: "space-between", marginLeft: 30, marginRight: 30}}>
                <Button title="edit" onPress = {() => {
                    navigation.navigate('Create Cat', {
                        initialVal : {name: data.name, description: data.description, id: data.id, characteristics: data.characteristics, breed: data.breed, weight: data.breed}
                    })
                }}>
                </Button>
                <Button title="delete" onPress = {() => {
                    CatStore.update(s => {
                        s.cats.splice(s.cats.length-1, 1)
                        navigation.navigate('Home')
                        console.log(s.cats)
                        Toast.show("Cat deleted!")
                    })
                }}></Button>
            </View>



		</ScrollView>
	);
}

const styles2 = StyleSheet.create({
    container: {
      flex:1,
      flexGrow:1,
      height:300,
      position: 'relative',
      paddingTop:50,
      paddingRight: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: 'bold', 
        textAlign: 'center',
      },
    subTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: 'bold', 
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})