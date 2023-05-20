import React from "react";
import { CatProvider } from "./src/context/CatContext";
import CatList from "./src/components/CatList";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const App = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
				}}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.textWrapper}>
					<Text style={styles.sectionTitle}>Your Catopedia</Text>

					<View style={styles.items}>
						<CatProvider>
							<CatList />
						</CatProvider>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e8eaed",
	},
	textWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#3a38c0",
	},
	items: {
		marginTop: 30,
		marginBottom: 30,
	},
});

export default App;
