import React from "react";
import {
	render,
	fireEvent,
	screen,
	prettyDOM,
} from "@testing-library/react-native";
import "@testing-library/jest-dom";

import CatList from "../CatList";
import { CatProvider } from "../../context/CatContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
	getItem: jest.fn(() => Promise.resolve(null)),
	setItem: jest.fn(() => Promise.resolve(null)),
}));

test("add a cat", async () => {
	render(
		<CatProvider>
			<CatList />
		</CatProvider>
	);

	// Open the modal to add a cat
	fireEvent.press(screen.getByText("Add a cat"));

	// Fill out the form inputs
	fireEvent.changeText(screen.getByPlaceholderText("Name"), "Tom");
	fireEvent.changeText(screen.getByPlaceholderText("Breed"), "Tabby");
	fireEvent.changeText(
		screen.getByPlaceholderText("Description"),
		"Friendly cat"
	);

	// Submit the form
	fireEvent.press(screen.getByText("Submit"));

	// Assert that the cat is added
	const newCatName = screen.getByText("Tom");
	expect(newCatName).toBeTruthy();
});
