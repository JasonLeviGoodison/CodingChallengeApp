import React from "react";
import renderer from "react-test-renderer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import App from "./App";

jest.mock("@react-native-async-storage/async-storage", () => ({
	getItem: jest.fn(() => Promise.resolve(null)),
	setItem: jest.fn(() => Promise.resolve(null)),
}));
describe("<App />", () => {
	it("has 1 child", () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree.children.length).toBe(1);
	});
});
