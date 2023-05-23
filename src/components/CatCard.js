import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CatCard({ cat, navigation }) { // this is the component to display a cat's details
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CatDetailScreen', { cat })}>
            <View>
                <Text>{cat.name}</Text> 
                <Text>{cat.breed}</Text>
            </View>
        </TouchableOpacity>
    );
}// touch a cat to view its details || touch the add cat button to add a cat to the list || touch the delete cat button to delete a cat from the list
