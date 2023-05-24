import { Cat } from '../common/typesAndInterfaces';

export const generateKey = (name: string) => {
  return `${name}_${new Date().getTime()}`;
};

export const compareName = (a: Cat, b: Cat) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const compareBreed = (a: Cat, b: Cat) => {
  if (a.breed < b.breed) {
    return -1;
  }
  if (a.breed > b.breed) {
    return 1;
  }
  return 0;
};

export const compareAgeAsc = (a: Cat, b: Cat) => {
  const aAge = parseFloat(a.age);
  const bAge = parseFloat(b.age);
  if (aAge < bAge) {
    return -1;
  }
  if (aAge > bAge) {
    return 1;
  }
  return 0;
};

export const compareAgeDesc = (a: Cat, b: Cat) => {
  const aAge = parseFloat(a.age);
  const bAge = parseFloat(b.age);
  if (aAge > bAge) {
    return -1;
  }
  if (aAge < bAge) {
    return 1;
  }
  return 0;
};
