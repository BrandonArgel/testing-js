import { jest } from '@jest/globals';

// 1. Mock the module BEFORE importing BooksService
const mockGetAll = jest.fn();
const mockCreate = jest.fn();

jest.unstable_mockModule('../lib/mongo.lib.js', () => ({
  default: jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: mockCreate
  })),
}));

// 2. Now import the real modules
const { default: BooksService } = await import('./books.service.js');
import { generateManyBooks } from '../fakes/book.fake.js';

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    mockGetAll.mockClear();
    mockCreate.mockClear();
  });

  describe('Test for getBooks', () => {
    test('1. Test for getBooks', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});

      // Assert
      expect(books).toEqual(fakeBooks);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('2. Test for getBooks', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(5);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});

      // Assert
      expect(books[0].name).toBe(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
