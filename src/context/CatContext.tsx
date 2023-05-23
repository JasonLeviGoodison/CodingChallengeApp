import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Cat {
	id: string;
	name: string;
	breed: string;
	description: string;
}

interface CatProviderProps {
	children: React.ReactNode;
}

type CatAction =
	| { type: "ADD_CAT"; payload: Omit<Cat, "id"> }
	| { type: "EDIT_CAT"; payload: Cat }
	| { type: "DELETE_CAT"; payload: { id: string } }
	| { type: "LOAD_INITIAL_STATE"; payload: Cat[] };

function catReducer(state: Cat[], action: CatAction): Cat[] {
	switch (action.type) {
		case "ADD_CAT":
			return [...state, { ...action.payload, id: Date.now().toString() }];
		case "EDIT_CAT":
			return state.map((cat) =>
				cat.id === action.payload.id ? action.payload : cat
			);
		case "DELETE_CAT":
			return state.filter((cat) => cat.id !== action.payload.id);
		case "LOAD_INITIAL_STATE":
			return action.payload;
		default:
			throw new Error();
	}
}

export const CatContext = createContext<{
	state: Cat[];
	dispatch: React.Dispatch<CatAction>;
}>({
	state: [],
	dispatch: () => undefined,
});

export const CatProvider: React.FC<CatProviderProps> = ({ children }) => {
	const initialState: Cat[] = [];

	const [state, dispatch] = useReducer(catReducer, initialState);

	const loadInitialState = async (): Promise<Cat[]> => {
		try {
			const storedData = await AsyncStorage.getItem("cats");
			return storedData ? JSON.parse(storedData) : initialState;
		} catch (error) {
			console.error(error);
			return initialState;
		}
	};

	useEffect(() => {
		(async () => {
			const initialData = await loadInitialState();
			dispatch({ type: "LOAD_INITIAL_STATE", payload: initialData });
		})();
	}, []);

	useEffect(() => {
		AsyncStorage.setItem("cats", JSON.stringify(state));
	}, [state]);

	return (
		<CatContext.Provider value={{ state, dispatch }}>
			{children}
		</CatContext.Provider>
	);
};
