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
import Toast from 'react-native-root-toast';

export default function CatForm({route, navigation}) {
    const initialVal = route.params.initialVal;
    const [name, setName] = useState(initialVal.name)
    const [breed, setBreed] = useState(initialVal.breed)
    const [description, setDescription] = useState(initialVal.description)
    const [characteristics, setCharacteristis] = useState(initialVal.characteristics)
    const [weight, setWeight] = useState(initialVal.weight)

    return(
        <View style = {styles.container} behavior="padding">
            <Text style={{textAlign:"left", color:'grey', fontWeight:'bold'}}>Name</Text>
            <TextInput placeholder={!!initialVal.name ? undefined : "Name of Cat"}
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setName(val)}
                defaultValue={!!initialVal.name? initialVal.name: undefined}
                >
            </TextInput>
            <Text style={{textAlign:"left", color:'grey', fontWeight:'bold'}}>Breed</Text>
            <TextInput placeholder={!!initialVal.breed ? undefined : "Breed"}
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setBreed(val)}
                defaultValue={!!initialVal.breed? initialVal.breed: undefined}
                >
            </TextInput>
            <Text style={{textAlign:"left", color:'grey', fontWeight:'bold'}}>Characteristics</Text>
            <TextInput placeholder={!!initialVal.characteristics ? undefined : "Characteristics"}
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={(val) => setCharacteristis(val)}
                defaultValue={!!initialVal.characteristics? initialVal.characteristics: undefined}
                >
            </TextInput>
            <Text style={{textAlign:"left", color:'grey', fontWeight:'bold'}}>Description</Text>
            <TextInput placeholder={!!initialVal.description ? undefined : "Description"}
                keyboardType="ascii-capable"
                style={styles.descriptionInput}
                onChangeText={(val) => setDescription(val)}
                defaultValue={!!initialVal.description? initialVal.description: undefined}
                multiline={true}
                >
            </TextInput>
            <Text style={{textAlign:"left", color:'grey', fontWeight:'bold'}}>Weight (lbs)</Text>
            <TextInput placeholder={!!initialVal.weight ? undefined : "Weight"}
                keyboardType="decimal-pad"
                style={styles.input}
                onChangeText={(val) => setWeight(val)}
                defaultValue={!!initialVal.weight? initialVal.weight: undefined}
                multiline={true}
                >
            </TextInput>
            {!!initialVal.name 
                ? <Button title = "Update"  onPress = {() => {
                    CatStore.update(s => {
                        s.cats[initialVal.id] = {name: name, breed: breed, description: description, characteristics: characteristics, id: initialVal.id, weight: weight}
                    })
                    navigation.navigate('Home')
                    Toast.show("Cat updated successfully!")
                }}>
                </Button>
             : <Button title = "create" onPress={() => {
                    CatStore.update(s => {
                        s.cats.push({name: name, breed: breed, description: description, characteristics: characteristics, id: s.cats.length, weight: weight})
                        navigation.navigate('Home')
                        Toast.show("Cat created successfully!")
                    })
                }}></Button>
            
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    }, 
    input: {
        borderWidth: 1,
        padding: 8,
        margin: 10,
        width: 200,
    },
    descriptionInput: {
        borderWidth: 1,
        padding: 8,
        margin: 10,
        width: 200,
    }
})