import React, { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	TextInput,
	ActivityIndicator,
	Text,
	View,
	Image,
	Keyboard,
	TouchableWithoutFeedback,
    StyleSheet,
    Button,
    KeyboardAvoidingView
} from "react-native";
import { CatStore } from "../CatStore";

export default function Create({navigation}) {
    const [name, setName] = useState()
    const [breed, setBreed] = useState()
    const [description, setDescription] = useState()
    const [characteristics, setCharacteristis] = useState()

    return(
        <KeyboardAvoidingView style = {styles.container} behavior="padding">
            <TextInput placeholder="Name of Cat" 
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setName(val)}
                >
            </TextInput>
            <TextInput placeholder="Breed" 
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setBreed(val)}
                >
            </TextInput>
            <Text>{breed}</Text>
            <TextInput placeholder="Description" 
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setDescription(val)}
                >
            </TextInput>
            <TextInput placeholder="Characteristics" 
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setCharacteristis(val)}
                >
            </TextInput>
            <Button title = "create" onPress={() => {
                CatStore.update(s => {
                    s.cats.push({name: name, breed: breed, description: description, characteristics: characteristics})
                    navigation.navigate('Home')
                    // s.cats.length > 0 ? s.empty = false : s.empty = true
                    // console.log(s.cats)
                    // console.log(s.empty)
                })
            }}></Button>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: {
        borderWidth: 1,
        padding: 8,
        margin: 10,
        width: 200,
    }
})