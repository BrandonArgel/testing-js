import { jest } from '@jest/globals';

// 1. Mock BEFORE importing app/services
const mockGetAll = jest.fn();
const mockCreate = jest.fn();

jest.unstable_mockModule('../src/lib/mongo.lib.js', () => ({
  default: jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: mockCreate,
  })),
}));

// 2. Now import real modules (must happen after mock)
const createApp = (await import('../src/app.js')).default;

import request from 'supertest';
import { generateManyBooks } from '../src/fakes/book.fake.js';

describe('test for books endpoint', () => {
  let app;
  let server;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  beforeEach(() => {
    mockGetAll.mockClear();
    mockCreate.mockClear();
  });

  describe('test for [GET]/api/v1/books', () => {
    test('should return a list of books', async () => {
      const fakeBooks = generateManyBooks(2);
      mockGetAll.mockResolvedValue(fakeBooks);

      const { body } = await request(app).get('/api/v1/books').expect(200);

      expect(body.length).toBe(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', undefined);
    });
  });
});
