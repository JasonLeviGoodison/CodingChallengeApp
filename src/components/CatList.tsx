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
		{
			id: "6",
			name: "Max",
			breed: "Persian",
			description:
				"Max is a relaxed and easy-going cat. He enjoys the finer things in life like gourmet food and soft blankets.",
		},
		{
			id: "7",
			name: "Lucy",
			breed: "Scottish Fold",
			description:
				"Lucy is a curious and playful cat. She enjoys exploring her surroundings and chasing laser pointers.",
		},
		{
			id: "8",
			name: "Charlie",
			breed: "Siberian",
			description:
				"Charlie is an adventurous and independent cat. He enjoys spending time outside and climbing trees.",
		},
		{
			id: "9",
			name: "Daisy",
			breed: "Sphynx",
			description:
				"Daisy is a friendly and sociable cat. Despite her lack of fur, she enjoys cuddling up to her human companions for warmth.",
		},
		{
			id: "10",
			name: "Oliver",
			breed: "Abyssinian",
			description:
				"Oliver is an active and intelligent cat. He enjoys solving puzzles and playing fetch with small balls.",
		},
		{
			id: "11",
			name: "Chloe",
			breed: "Russian Blue",
			description:
				"Chloe is a quiet and gentle cat. She enjoys spending her days napping in the sun and getting brushed by her humans.",
		},
		{
			id: "12",
			name: "Oscar",
			breed: "Norwegian Forest Cat",
			description:
				"Oscar is a large and friendly cat. He enjoys play wrestling and spending time with his family.",
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
