import React from "react";
import { CatProvider } from "./src/context/CatContext";
import CatList from "./src/components/CatList";
import { Text, View, ScrollView } from "react-native";
import styles from "./src/styles/AppStyles";

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

export default App;
