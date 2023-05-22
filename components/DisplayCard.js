import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/cardStyles";

export default function DisplayCard({route, navigation}) {
    const {data, num} = route.params;
	return (
		<View style={styles.card}>
			<Text>{data.name}</Text>
            <Text>{data.description}</Text>
            <Text>{data.breed}</Text>
		</View>
	);
}