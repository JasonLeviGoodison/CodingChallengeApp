import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		fontSize: 20,
		// color: "#3a38c0",
		fontWeight: "bold",
		marginLeft: 10,
		width: 200,
		// Truncate text with ellipsis
	},
	buttonsContainer: {
		flexDirection: "row",
	},

	detailsContainer: {
		padding: 10,
	},
	breed: {
		fontSize: 16,
		color: "#3a38c0",
		fontWeight: "bold",
		marginBottom: 8,
		marginTop: -10,
	},
	description: {
		fontSize: 14,
		marginBottom: 10,
	},
});
