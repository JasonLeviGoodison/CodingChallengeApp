import { createContext } from 'react';
import SortContextType from './SortContextTypes';

const SortContext = createContext<SortContextType>({ property: null, setProperty: null });

export default SortContext;
