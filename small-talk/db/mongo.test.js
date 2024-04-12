import Mongoboi from './mongo';

// Import a testing server so we don't have to mock every MongoDB operation
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('Mongoboi', () => {
    let mongoboi;
    let mongoServer;

    // Define all the operations needed to test the MongoDB operations without interacting with a real database
    beforeAll(async () => {
        mongoServer = new MongoMemoryServer();
        await mongoServer.start();
        const mongoUri = await mongoServer.getUri();
        mongoboi = new Mongoboi(mongoUri, 'testDB');
        await mongoboi.connect();
    });

    afterAll(async () => {
        await mongoboi.disconnect();
        mongoServer.stop();
    });

    test('insertOne should insert a document into the collection', async () => {
        const collectionName = 'testCollection';
        const document = { name: 'John Doe', age: 30 };

        const insertedId = await mongoboi.insertOne(collectionName, document);

        expect(insertedId).toBeTruthy();
    });

    test('findOne should find a document in the collection', async () => {
        const collectionName = 'testCollection';
        const query = { name: 'John Doe' };

        const result = await mongoboi.findOne(collectionName, query);

        expect(result).toBeTruthy();
        expect(result.name).toBe('John Doe');
    });

    test('findAll should find all documents in the collection', async () => {
        const collectionName = 'testCollection';
        const query = {};
        const projection = { name: 1, age: 1 };

        const result = await mongoboi.findAll(collectionName, query, projection);

        expect(result).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
    });
});