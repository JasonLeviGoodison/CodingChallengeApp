import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import React from 'react';


const styles = StyleSheet.create({
	card: {
		borderRadius: 9,
		elevation: 3,
		backgroundColor: "#fff",
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "#323",
		shadowOpacity: 0.3,
		shadowRadius: 5,
		marginHorizontal: 10,
		marginBottom: 30,
		marginLeft: 10,
		marginRight: 20,
		minWidth: "95%",
		maxWidth: "95%",
		ustifyContent: 'space-between', 
		flexDirection:'column', 
		flex:1
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
});

export default styles;
