import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: "white",
		padding: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	input: {
		height: 50,
		fontSize: 16,
		borderColor: "#dcdcdc",
		borderWidth: 1,
		borderRadius: 10,
		marginBottom: 15,
		paddingHorizontal: 10,
		backgroundColor: "#f8f8f8",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#3a38c0",
		marginBottom: 20,
	},
});
