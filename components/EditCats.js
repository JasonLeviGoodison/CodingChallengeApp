import React, { useState } from 'react';
import { Keyboard, TextInput, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import CustomButton from './CustomButton';
import { useCats } from '../context/CatContext';

const EditCats = ({ cat, onEdit }) => {

    // Initializing the state variables with the current cat's values
    const { editCat } = useCats();
    const [name, setName] = useState(cat.name);
    const [breed, setBreed] = useState(cat.breed);
    const [description, setDescription] = useState(cat.description);

    // Using the functions from the CatContext to edit the cat so it can be saved
    const handleSubmit = () => {
        editCat(cat.id, { id: cat.id, name, breed, description });
        onEdit();
    };

    return (
        // Dismisses the keyboard when the user taps outside of the text input
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {/* Gives the screen of the edit page */}
            <SafeAreaView style={styles.centeredView}>

                {/* Text inputs for the name, breed, and description with their own style */} 
                <Text style={styles.label}>Name</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter cat's name" 
                    value={name} 
                    onChangeText={setName} 
                />
                <Text style={styles.label}>Breed</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter cat's breed" 
                    value={breed} 
                    onChangeText={setBreed} 
                />
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter a description" 
                    value={description} 
                    onChangeText={setDescription} 
                />   

                {/* Button to save the changes made to the cat */}
                <CustomButton text="Save" onPress={handleSubmit} style={styles.button} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    // Styles for the edit page background
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    // Styles for the text inputs
    input: {
        height: 50,
        borderColor: '#888',
        borderWidth: 1,
        paddingLeft: 15,
        marginBottom: 20,
        borderRadius: 10,
        width: '80%',
        backgroundColor: '#FFF',
    },
    // Styles for the label of the text inputs text
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    // Styles for the custom button to save the changes made to the cat
    button: {
        backgroundColor: '#888',
        padding: 10,
        borderRadius: 5,
    }
});

export default EditCats;
