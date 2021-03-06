'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.booksBookIdGET = function booksBookIdGET (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  Book.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksGET = function booksGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  var limit = req.swagger.params['limit'].value;
  Book.booksGET(offset,search,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
