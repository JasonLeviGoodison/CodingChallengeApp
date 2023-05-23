import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CatCard({ cat, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CatDetailScreen', { cat })}>
            <View>
                <Text>{cat.name}</Text>
                <Text>{cat.breed}</Text>
            </View>
        </TouchableOpacity>
    );
}
