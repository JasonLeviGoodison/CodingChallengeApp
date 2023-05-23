import React, { useContext, useState } from "react";
import {
	View,
	FlatList,
	TouchableOpacity,
	Modal,
	StyleSheet,
	Text,
	KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CatContext } from "../context/CatContext";
import CatForm from "./CatForm";
import CatCard from "./CatCard";
import styles from "../styles/CatListStyles";

const CatList: React.FC = () => {
	const { state: cats, dispatch } = useContext(CatContext);
	const [catToEdit, setCatToEdit] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	// Use this data in line 110 to render some immutable list of cats.
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

	const handleAddPress = () => {
		setModalVisible(true);
		setCatToEdit(null);
	};

	const handleEditPress = (cat) => {
		setModalVisible(true);
		setCatToEdit(cat);
	};

	const handleDeletePress = (catId: string) => {
		dispatch({ type: "DELETE_CAT", payload: { id: catId } });
	};

	const AddButton = () => {
		return (
			<TouchableOpacity
				style={styles.addContainer}
				onPress={handleAddPress}
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
	};

	function renderCat({ item }) {
		return item.id === "addButton" ? (
			<AddButton />
		) : (
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
				data={[...cats, { id: "addButton" }]}
				renderItem={renderCat}
				keyExtractor={(item) => item.id}
				scrollEnabled={false}
			/>
			<Modal visible={modalVisible} animationType="slide" transparent>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => setModalVisible(false)}
					style={styles.modalBackground}
				>
					<KeyboardAvoidingView
						behavior="padding"
						style={styles.centeredView}
					>
						<CatForm
							catToEdit={catToEdit}
							closeForm={() => setModalVisible(false)}
						/>
					</KeyboardAvoidingView>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

export default CatList;
