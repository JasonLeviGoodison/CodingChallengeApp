import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Cat } from "../context/CatContext";
import styles from "../styles/CatCardStyles";
import Collapsible from "react-native-collapsible";

interface CatCardProps {
	cat: Cat;
	onEditPress: (cat: Cat) => void;
	onDeletePress: (catId: string) => void;
}

const CatCard: React.FC<CatCardProps> = ({
	cat,
	onEditPress,
	onDeletePress,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handlePress = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<View style={styles.rowContainer}>
				<View style={styles.infoContainer}>
					{/* Use your own cat vector image */}
					<Icon name="logo-octocat" size={50} />
					<Text numberOfLines={1} style={styles.name}>
						{cat.name}
					</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity onPress={() => onEditPress(cat)}>
						<Icon
							name="create-outline"
							size={20}
							marginLeft={10}
							color="#3a38c0"
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => onDeletePress(cat.id)}>
						<Icon
							name="trash-outline"
							size={20}
							marginLeft={10}
							color="red"
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Collapsible collapsed={!isExpanded}>
				<View style={styles.detailsContainer}>
					<Text style={styles.breed}>{cat.breed}</Text>
					<Text style={styles.description}>{cat.description}</Text>
				</View>
			</Collapsible>
		</TouchableOpacity>
	);
};

export default CatCard;
