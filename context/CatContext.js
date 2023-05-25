import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creating the context to save the information
const CatContext = createContext();
export const useCats  = () => {
    return useContext(CatContext);
}

export const CatProvider = ({ children }) => {

    // Initilaizing the state 
    const [cats, setCats] = useState([]);

    // Loading the saved cats from the storage
    useEffect(() => {
        const loadCats = async () => {
            const savedCats = await AsyncStorage.getItem('cats');
            if (savedCats) {
                setCats(JSON.parse(savedCats));
            }
        };
        loadCats();
    }, []);

    // Saving the cats to the storage
    const saveCats = async (newCats) => {
        await AsyncStorage.setItem('cats', JSON.stringify(newCats));
        setCats(newCats);
    }

    // Functions to add, remove, edit, sort, and clear all cats
    const addCat = (cat) => { 
        const newCat = { id: Math.random().toString(), ...cat, created_at: new Date() };
        saveCats([...cats, newCat]);
    };

    const removeCat = async (catId) => {
        const newCats = cats.filter(cat => cat.id !== catId);
        await saveCats(newCats);
    };

    const editCat = async (catId, updatedCat) => {
        const newCats = cats.map(cat => cat.id === catId ? updatedCat : cat);
        await saveCats(newCats);
    };

    const sortCats = (field) => {
        const newCats = [...cats];
        newCats.sort((a, b) => {
            if (field === 'name') {
                return a.name.localeCompare(b.name);
            } else if (field === 'created_at') {
                return new Date(a.created_at) - new Date(b.created_at);
            }
            return 0;
        });
        setCats(newCats);
    };
    
    const clearAllCats = async () => {
        await AsyncStorage.removeItem('cats');
        setCats([]);
    };

    return (
        <CatContext.Provider value={{ cats, addCat, removeCat, editCat, sortCats, clearAllCats}}>
            {children}
        </CatContext.Provider>
    )
}

export default CatProvider;
