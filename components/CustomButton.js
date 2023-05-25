import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text }) => {
    return (
        // The button is a touchable opacity with the text being the text prop
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // Custom style for the button
    button: {
        backgroundColor: 'blue',
        opacity: 0.75,
        padding: 10,
        borderRadius: 5,
    },

    // Custom style for the button text
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomButton;