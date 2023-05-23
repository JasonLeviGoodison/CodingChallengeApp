import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCat } from '../redux/catActions';

export default function AddCatScreen({ navigation }) { // this is the screen to add a cat to the list
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    return ( // this is the form to add a cat to the list
        <View>
            <TextInput placeholder="Name" onChangeText={setName} value={name} />
            <TextInput placeholder="Breed" onChangeText={setBreed} value={breed} />
            <TextInput placeholder="Description" onChangeText={setDescription} value={description} />
            <Button title="Add Cat" onPress={() => { dispatch(addCat({ id: Date.now(), name, breed, description })); navigation.goBack(); }} />
        </View>
    );
}
