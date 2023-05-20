import { StyleSheet } from "react-native";

export default StyleSheet.create({
	addButton: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	addContainer: {
		marginBottom: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	addRowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	addInfoContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	name: {
		fontSize: 16,
		marginLeft: 10,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
		margin: 20,
	},
});
