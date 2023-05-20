import React, { useContext, useState, useEffect, useRef } from "react";
import { Button, TextInput, View, Text, Alert } from "react-native";
import { CatContext, Cat } from "../context/CatContext";
import styles from "../styles/CatFormStyles";

interface CatFormProps {
	catToEdit: Cat | null;
	closeForm: () => void;
}

const CatForm: React.FC<CatFormProps> = ({ catToEdit, closeForm }) => {
	const { dispatch } = useContext(CatContext);
	const [name, setName] = useState("");
	const [breed, setBreed] = useState("");
	const [description, setDescription] = useState("");

	const breedInputRef = useRef<TextInput>(null);
	const descriptionInputRef = useRef<TextInput>(null);

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

export default CatForm;
