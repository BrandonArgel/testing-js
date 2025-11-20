import { faker } from '@faker-js/faker';

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => {
  const fakeBooks = [];
  for (let index = 0; index < size; index += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

export { generateOneBook, generateManyBooks };
