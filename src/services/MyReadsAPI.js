import { getAll, get, search as searchAPI, update } from './AbstractBooksAPI';
import _ from 'lodash';

const transformParams = (bookParams) => {
  const { cover, imageLinks = {} } = bookParams;
  bookParams.cover = cover || imageLinks.thumbnail || imageLinks.smallThumbnail;
  bookParams.description = (bookParams.authors || ['Unknown Author']).join(', ');

  return bookParams
}

const getAllByShelf = async (shelfName) => {
  const books = await getAll();

  return _.filter(books, ['shelf', shelfName])
          .map(transformParams);
}

const search = async (query, maxResult) => {
  const books = await searchAPI(query, maxResult);
  const allBooks = await getAll();
  const shelves  = {}

  allBooks.forEach((book) => {
    shelves[book.id] = book.shelf;
  })

  const addCurrentShelf = (bookParams) => {
    bookParams.currentShelf = shelves[bookParams.id];

    return bookParams;
  }

  return books.map( (book) => addCurrentShelf(transformParams(book)) );
}

export {
  getAllByShelf,
  getAll,
  get,
  search,
  update
};
