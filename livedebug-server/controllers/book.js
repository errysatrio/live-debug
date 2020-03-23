const Book = require('../models').Book;

class BookController {
  static create(req, res, next) {
    const { isbn, title, author, category, stock } = req.body;
    Book.create({ isbn, title, author, category, stock })
      .then((newBook) => res.status(201).json(newBook))
      .catch(err => {
        // res.send(err)
        // console.log('disini')
        next(err)
      });
  }
}

module.exports = BookController;
