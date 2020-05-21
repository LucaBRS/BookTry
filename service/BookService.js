'use strict';


let sqlDb;

exports.booksDbSetup = function(s) {
sqlDb = s;
console.log("Checking if books table exists");
return sqlDb.schema.hasTable("books").then(exists => {
if (!exists) {
console.log("It doesn't so we create it");
 return sqlDb.schema.createTable("books", table => {
 table.increments();
 table.text("title");
 table.text("author");
 table.float("value");
 table.text("currency");
 table.enum("status", ["available", "out of stock"]);
 });
 } else {
 console.log("It exists.");
 
 }
 });
 };

/**
 * Find book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.booksBookIdGET = function(bookId) {
  
  return sqlDb("books").where('id',bookId);
}


/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * search String Generic text search (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function(offset,search,limit) {  
  if (!limit) limit=12;

  return sqlDb("books").limit(limit).offset(offset) 
}

