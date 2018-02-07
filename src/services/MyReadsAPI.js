import { getAll, get, search as searchAPI, update } from './AbstractBooksAPI';
import _ from 'lodash';

const transformParams = (bookParams) => {
  bookParams.cover = bookParams.imageLinks.thumbnail || bookParams.imageLinks.smallThumbnail;
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

  return books.map(transformParams);
}

export {
  getAllByShelf,
  getAll,
  get,
  search,
  update
};
