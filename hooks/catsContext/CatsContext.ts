import { createContext } from 'react';
import CatsContextType from './CatsContextTypes';

const CatsContext = createContext<CatsContextType>({ cats: null, setCats: null });

export default CatsContext;
