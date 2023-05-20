import React, { useContext, useState, useEffect } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { CatContext, Cat } from "../context/CatContext";

interface CatFormProps {
	catToEdit: Cat | null;
	closeForm: () => void;
}

const CatForm: React.FC<CatFormProps> = ({ catToEdit, closeForm }) => {
	const { dispatch } = useContext(CatContext);
	const [name, setName] = useState("");
	const [breed, setBreed] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (catToEdit) {
			setName(catToEdit.name);
			setBreed(catToEdit.breed);
			setDescription(catToEdit.description);
		}
	}, [catToEdit]);

	const handleSubmit = () => {
		if (
			name.trim() === "" ||
			breed.trim() === "" ||
			description.trim() === ""
		)
			return;

		if (catToEdit) {
			dispatch({
				type: "EDIT_CAT",
				payload: { id: catToEdit.id, name, breed, description },
			});
		} else {
			dispatch({
				type: "ADD_CAT",
				payload: { name, breed, description },
			});
		}

		closeForm();
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Name"
			/>
			<TextInput
				style={styles.input}
				value={breed}
				onChangeText={setBreed}
				placeholder="Breed"
			/>
			<TextInput
				style={styles.input}
				value={description}
				onChangeText={setDescription}
				placeholder="Description"
			/>
			<View style={styles.buttons}>
				<Button title="Cancel" onPress={closeForm} />
				<Button title="Submit" onPress={handleSubmit} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		backgroundColor: "white",
		padding: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		padding: 5,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default CatForm;
