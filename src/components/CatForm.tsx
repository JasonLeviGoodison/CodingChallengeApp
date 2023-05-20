import React, { useContext, useState, useEffect, useRef } from "react";
import { Button, TextInput, View, StyleSheet, Text, Alert } from "react-native";
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

	const breedInputRef = useRef(null);
	const descriptionInputRef = useRef(null);

	useEffect(() => {
		if (catToEdit) {
			setName(catToEdit.name);
			setBreed(catToEdit.breed);
			setDescription(catToEdit.description);
		} else {
			setName("");
			setBreed("");
			setDescription("");
		}
	}, [catToEdit]);

	const handleSubmit = () => {
		if (
			name.trim() === "" ||
			breed.trim() === "" ||
			description.trim() === ""
		) {
			Alert.alert("Error", "Please fill out all fields");
			return;
		}

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
			<Text style={styles.sectionTitle}>Add a cat</Text>

			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Name"
				onSubmitEditing={() => breedInputRef.current.focus()}
				returnKeyType="next"
				blurOnSubmit={false}
			/>
			<TextInput
				ref={breedInputRef}
				style={styles.input}
				value={breed}
				onChangeText={setBreed}
				placeholder="Breed"
				onSubmitEditing={() => descriptionInputRef.current.focus()}
				returnKeyType="next"
				blurOnSubmit={false}
			/>
			<TextInput
				ref={descriptionInputRef}
				style={styles.input}
				value={description}
				onChangeText={setDescription}
				placeholder="Description"
				onSubmitEditing={handleSubmit}
				returnKeyType="done"
			/>
			<View style={styles.buttons}>
				<Button color={"#3a38c0"} title="Cancel" onPress={closeForm} />
				<Button
					color={"#3a38c0"}
					title="Submit"
					onPress={handleSubmit}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default CatForm;
