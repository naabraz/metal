const mongo = require('mongodb').MongoClient;
const { url, name } = require('../../config').database;

const insertDocument = async (document, collection) => {
  try {
    const connection = await mongo.connect(url, { useNewUrlParser: true });
    const base = await connection.db(name);
    base.collection(collection).insertOne(document);
    connection.close();

    return { success: true };
  } catch (error) {
    return Promise.reject(new Error('There was an error when inserting the document'));
  }
};

const listCollection = async (collection) => {
  try {
    const connection = await mongo.connect(url, { useNewUrlParser: true });
    const base = await connection.db(name);
    const result = await base.collection(collection).find().toArray();
    connection.close();

    return result;
  } catch (error) {
    return Promise.reject(new Error('There was an error when inserting the document'));
  }
};

module.exports = {
  insertDocument,
  listCollection,
};
