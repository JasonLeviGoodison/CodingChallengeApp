import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const CatDetailScreen = ({ route, navigation }) => {
    const { cat } = route.params;

    return (
        <View style={styles.container}>
            <Button
                title="Edit"
                onPress={() =>
                    navigation.navigate('EditCatScreen', {
                        cat: cat,
                    })
                }
            />
            <Image style={styles.image} source={{ uri: cat.image }} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{cat.name}</Text>
                <Text style={styles.breed}>{cat.breed}</Text>
                <Text style={styles.description}>{cat.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c0def3',
        alignItems: 'center',
    },
    detailsContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        color: '#333',
        marginBottom: 10,
    },
    breed: {
        fontSize: 20,
        color: '#777',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
});

export default CatDetailScreen;
