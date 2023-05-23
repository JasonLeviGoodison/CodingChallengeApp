import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeCat } from '../redux/catActions';

export default function CatDetailScreen({ route, navigation }) { // this is the screen to view a cat's details
    const { cat } = route.params;
    const dispatch = useDispatch();

    return (
        <View>
            <Text>{cat.name}</Text>
            <Text>{cat.breed}</Text>
            <Text>{cat.description}</Text>
            <Button title="Delete Cat" onPress={() => { dispatch(removeCat(cat.id)); navigation.goBack(); }} />
        </View>
    );
}
