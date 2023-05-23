import { configureStore } from '@reduxjs/toolkit';
import catReducer from './src/redux/catReducer';

const store = configureStore({
    reducer: catReducer,
});

export default store;
