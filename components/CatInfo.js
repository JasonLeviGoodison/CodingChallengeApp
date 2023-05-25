import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CatInfo = ({ name, breed, description }) => {
    return (
        // Pokeball type styling for the container and information
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.middle}>
                <Text style={styles.breed}>{breed}</Text>
            </View>
            <View style={styles.bottomHalf}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Pokeball type styling for the container and information
    container: {
        width: "96%", 
        height: 120, 
        borderRadius: 60, 
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center',
        overflow: 'hidden', 
        marginBottom: 5, 
        marginTop: 5, 
    },

    // Top of the pokeball for name
    topHalf: {
        flex: 1, 
        backgroundColor: 'red',
        justifyContent: 'center',
    },

    // Middle of the pokeball for breed
    middle: {
        backgroundColor: 'black',
        padding: 5,
        justifyContent: 'center', 
    },

    // Bottom of the pokeball for description
    bottomHalf: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', 
    },

    // Name text style
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

    // Breed text style
    breed: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },

    // Description text style
    description: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    }
});

export default CatInfo;
