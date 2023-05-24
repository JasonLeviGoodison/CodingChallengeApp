import { Cat } from '../../common/typesAndInterfaces';

type CatsContextType = {
  cats: Array<Cat> | null;
  setCats: Function | null;
};

export default CatsContextType;
