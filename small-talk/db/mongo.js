// Avoids errors when using Jest
global.TextEncoder = require('text-encoding').TextEncoder;
global.TextDecoder = require('text-encoding').TextDecoder;

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

  async updateOne(collectionName, filter, document) {
    try {
      const result = await this.db.collection(collectionName).updateOne(filter, document);
      console.log("document updated: "+result.modifiedCount)
      return result;
    } catch (error) {
      return null;
    }
  }
  async findOne(collectionName, query) {
    try {
      const result = await this.db.collection(collectionName).findOne(query);
      console.log('Document found:', result);
      return result;
    } catch (error) {
      //console.error('Error finding document:', error);
      return null;
    }
  }


  /**
   * Returns an array of documents that match the query and projection filters.
   * 
   * @param {string} collectionName - The name of the collection to search within the database attached to the Mongoboi instance.
   * @param {Object} query - Specifies the selection criteria using query operators.
   * @param {Object} projection - Specifies the fields to return in the documents that match the query filter.
   * @returns {Array} - An array of documents that match the query and projection filters.
   */
  async findAll(collectionName, query, projection) {
    try {
      const result = await this.db.collection(collectionName).find(query, {projection}).toArray();
      console.log('Documents found:', result);
      return result;
    } catch (error) {
      console.error('Error finding documents:', error);
      return null;
    }
  }
}

module.exports = Mongoboi;