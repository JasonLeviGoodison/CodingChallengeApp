import { Asset } from 'expo-asset';

const DEFAULT_IMAGE = Asset.fromModule(require('../assets/CatTraxIcon.png')).uri;
const SPACING = '5%';
enum SORT_PROPERTIES {
  NAME = 'name',
  BREED = 'breed',
  AGE_ASC = 'age',
  AGE_DESC = 'age',
}

export { DEFAULT_IMAGE, SPACING, SORT_PROPERTIES };
