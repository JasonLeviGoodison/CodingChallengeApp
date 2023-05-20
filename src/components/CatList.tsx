import React, { useContext, useState } from "react";
import {
	View,
	FlatList,
	TouchableOpacity,
	Modal,
	StyleSheet,
	Text,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CatContext } from "../context/CatContext";
import CatForm from "./CatForm";
import CatCard from "./CatCard";

const CatList: React.FC = () => {
	const { state: cats, dispatch } = useContext(CatContext);
	const [catToEdit, setCatToEdit] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	// TODO: Remove this data once you have implemented the context
	const catsData = [
		{
			id: "1",
			name: "Oliver",
			breed: "British Shorthair",
			description:
				"Oliver is a well-mannered cat. He loves to lounge around and take catnaps.",
		},
		{
			id: "2",
			name: "Leo",
			breed: "Maine Coon",
			description:
				"Leo is a playful cat with a love for adventure. His favorite toy is a feather wand.",
		},
		{
			id: "3",
			name: "Milo",
			breed: "Bengal",
			description:
				"Milo is a bit of a wildcat, he loves to hunt and explore the outdoors.",
		},
		{
			id: "4",
			name: "Luna",
			breed: "Siamese",
			description:
				"Luna is a vocal cat who loves attention. She enjoys a good conversation and a good petting session.",
		},
		{
			id: "5",
			name: "Bella",
			breed: "Ragdoll",
			description:
				"Bella is a gentle and affectionate cat. She loves to be held and cuddled.",
		},
	];

	const handleEditPress = (cat) => {
		setCatToEdit(cat);
		setModalVisible(true);
	};

	const handleDeletePress = (catId) => {
		dispatch({ type: "DELETE_CAT", payload: { id: catId } });
	};

	function renderCat({ item }) {
		if (item.id === "addButton") {
			console.log("add button");
			return (
				<TouchableOpacity
					style={styles.addContainer}
					onPress={() => setModalVisible(true)}
				>
					<View style={styles.addRowContainer}>
						<View style={styles.addInfoContainer}>
							<Icon
								name="add-circle-outline"
								size={50}
								color="#3a38c0"
							/>
							<Text style={styles.name}>{"Add a cat"}</Text>
						</View>
					</View>
				</TouchableOpacity>
			);
		}

		return (
			<CatCard
				cat={item}
				onEditPress={handleEditPress}
				onDeletePress={handleDeletePress}
			/>
		);
	}

	return (
		<View>
			<FlatList
				data={[...catsData, { id: "addButton" }]}
				renderItem={renderCat}
				keyExtractor={(item) => item.id}
			/>
			<Modal visible={modalVisible} animationType="slide" transparent>
				<CatForm
					catToEdit={catToEdit}
					closeForm={() => setModalVisible(false)}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
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
		fontSize: 20,
		marginLeft: 10,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
});

export default CatList;
