import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { editCat } from '../redux/catActions';

const EditCatScreen = ({ route }) => {
    const dispatch = useDispatch();
    const { cat } = route.params;
    const [name, setName] = useState(cat.name);
    const [breed, setBreed] = useState(cat.breed);
    const [description, setDescription] = useState(cat.description);
    const [image, setImage] = useState(cat.image);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const submitForm = () => {
        dispatch(editCat({ id: cat.id, name, breed, description, image }));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Cat</Text>
            <TextInput
                style={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder='Breed'
                value={breed}
                onChangeText={setBreed}
            />
            <TextInput
                style={styles.input}
                placeholder='Description'
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.buttonText}>Pick an image from Photos</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffddc1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#333',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ffab40',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default EditCatScreen;
