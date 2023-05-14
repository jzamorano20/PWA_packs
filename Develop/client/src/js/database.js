import { openDB } from 'idb';

const initdb = async () =>
//creating a new database named 'jate'
  openDB('jate', 1, {
    //adding database schema 
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //creating a new object to store the data and called it 'id' 
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented');
//creating a connection to DB and will be using version 1
const jateDb = await openDB("jate", 1);
//creating a new transaction and selecting hte DB and what to do in it 
const tx = jateDb.transaction("jate", "readwrite");
//opening up the desired store
const store = tx.objectStore("jate");
// using the add method to store and pass 
const request = store.add({id: 1, value: content});
//get the confirmation it went through
const result = await request;
console.log("Updated text entry has been saved to the database!", result);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log("Text has been retrieved from the database.");
//creating a DB and version we want to use 
const jateDb = await openDB("jate", 1);
//creating a tx and selecting DB and what to do
const tx = jateDb.transaction("jate", "readonly");
//opening the object store
const store = tx.objectStore("jate");
//using getALL method to get all data in the DB
const request = store.getAll();
//confirms we got it 
const result = await request;
console.log("result.value", result.value);
return result.value;
};
initdb();
