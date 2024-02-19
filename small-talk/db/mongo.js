const { MongoClient } = require('mongodb');

class Mongoboi {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB Atlas');
      this.db = this.client.db(this.dbName);
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error);
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB Atlas');
    } catch (error) {
      console.error('Error disconnecting from MongoDB Atlas:', error);
    }
  }

  async insertOne(collectionName, document) {
    try {
      const result = await this.db.collection(collectionName).insertOne(document);
      console.log('Document inserted:', result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error('Error inserting document:', error);
      return null;
    }
  }

  async findOne(collectionName, filter) {
    try {
      const result = await this.db.collection(collectionName).findOne(filter);
      console.log('Document found:', result);
      return result;
    } catch (error) {
      console.error('Error finding document:', error);
      return null;
    }
  }
}

module.exports = Mongoboi;