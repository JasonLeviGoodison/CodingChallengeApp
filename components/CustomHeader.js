import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextStroke } from './TextStroke';

// The custom made header for the style of the pokemon scheme
const CustomHeader = () => {
    return (
        <SafeAreaView style={styles.headerView}>
            {/* The outline of the font for Pokemon */}
            <TextStroke stroke={2} color={'#000000'}>
              <Text style={styles.headerTitle}>CatDex</Text>
            </TextStroke>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Container have the background color of red
    headerView: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderColor: "black",
        borderWidth: 1,
    },

    // The header title text of the app with CatDex being in yellow
    headerTitle: {
        fontSize: 36,
        fontFamily: 'Pokemon',
        color: 'yellow',
        padding: 5,
    }    
});

export default CustomHeader;
