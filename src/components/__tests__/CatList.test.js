import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CatList from "../CatList";
import { CatProvider } from "../../context/CatContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
	getItem: jest.fn(() => Promise.resolve(null)),
	setItem: jest.fn(() => Promise.resolve(null)),
}));

test("renders all cats", () => {
	// Mock the cats data
	const catsData = [
		{
			id: "1",
			name: "Oliver",
			breed: "British Shorthair",
			description: "...",
		},
		// Add more cat objects as needed
	];

	render(
		<CatProvider>
			<CatList />
		</CatProvider>
	);
	for (const cat of catsData) {
		fireEvent.press(screen.getByText("Add a cat"));

		// Fill out the form inputs
		fireEvent.changeText(screen.getByPlaceholderText("Name"), cat.name);
		fireEvent.changeText(screen.getByPlaceholderText("Breed"), cat.breed);
		fireEvent.changeText(
			screen.getByPlaceholderText("Description"),
			cat.description
		);
		fireEvent.press(screen.getByText("Submit"));
	}

	// Check if all cat names are rendered on the screen
	catsData.forEach((cat) => {
		const catNameElement = screen.getByText(cat.name);
		expect(catNameElement).toBeTruthy();
	});
});
