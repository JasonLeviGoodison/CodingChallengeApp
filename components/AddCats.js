import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import CustomButton from './CustomButton';
import { useCats } from '../context/CatContext';

const AddCats = ({ visible, close }) => {
    // Initializing the state variables with the current cat's values
    const { addCat } = useCats();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');

    // Using the functions from the CatContext to edit the cat so it can be saved
    const handleSubmit = () => {
        addCat({ name, breed, description });
        setName('');
        setBreed('');
        setDescription('');
        close();
    };

    if (!visible) {
        return null;
    }

    return (
        // Dismisses the keyboard when the user taps outside of the text input
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={close}>
            <TouchableWithoutFeedback onPress={close}>
                {/* Popup view of the add function */}
                <View style={styles.centeredView}>
                    {/* Dismisses the keyboard when the user taps outside of the text input */}
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            {/* Text inputs for the name, breed, and description with their own style */}
                            <View style={styles.modalView}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Name" 
                                    placeholderTextColor="#36454F" 
                                    value={name} 
                                    onChangeText={setName} 
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Breed" 
                                    placeholderTextColor="#36454F" 
                                    value={breed} 
                                    onChangeText={setBreed} 
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Description" 
                                    placeholderTextColor="#36454F" 
                                    value={description} 
                                    onChangeText={setDescription} 
                                />

                                {/* Button to save the changes made to the cat */}
                                <View style={styles.buttonContainer}>
                                    <CustomButton text="Submit" onPress={handleSubmit} style={styles.button} />
                                    <CustomButton text="Cancel" onPress={close} style={styles.button} />
                                </View>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
    );
};

const styles = StyleSheet.create({
    // Styles for the add page background
    centeredView: {
        flex: 1,
        marginBottom: 90,
        justifyContent: "center",
        alignItems: "center",
    },

    // Styles for the add page popup
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        elevation: 5,
        borderColor: "black",
        borderWidth: 1,
    },

    // Styles for the text inputs
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: 200,
    },

    // Styles for the save buttons
    buttonContainer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },

    // Styles for the buttons
    button: {
        margin: 10,
    },
});

export default AddCats;
