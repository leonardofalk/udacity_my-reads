import React, {   Component } from 'react';
import _ from 'lodash';

import BookShelf from './BookShelf';
import SearchBookCard from './SearchBookCard';

const MAX_BOOKS_PER_SHELF_ROW = 5

class SearchBookShelf extends Component {
  render = () => (
    <BookShelf books={this._renderBooks()}/>
  )

  _renderBooks = () => {
    let bookshelf = {}, index = 0

    for (let book of this.props.books) {
      bookshelf[index] = bookshelf[index] || []
      bookshelf[index].push(book);

      if (bookshelf[index].length >= MAX_BOOKS_PER_SHELF_ROW) {
        index += 1
      }
    }

    return _.map(bookshelf, (books, index) => {
      return <div key={index}>{books.map((book, key) => <SearchBookCard key={key} { ...book }/>)}</div>
    })
  }
}

export default SearchBookShelf;
