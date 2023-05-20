import React, { createContext, useReducer } from "react";

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
	| { type: "DELETE_CAT"; payload: { id: string } };

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
	const [state, dispatch] = useReducer(catReducer, []);

	return (
		<CatContext.Provider value={{ state, dispatch }}>
			{children}
		</CatContext.Provider>
	);
};
