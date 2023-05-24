type Cat = {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  image: string;
};

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  image: string;
}

export { Cat, CatDetailProps };
