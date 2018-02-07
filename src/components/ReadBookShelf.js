import React, { Component } from 'react'
import _ from 'lodash'

import BookShelf from './BookShelf'
import ReadBookCard from './ReadBookCard'

const MAX_BOOKS_PER_SHELF_ROW = 5

class ReadBookShelf extends Component {
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
      return <div key={index}>{books.map((book, key) => <ReadBookCard key={key} { ...book }/>)}</div>
    })
  }
}

export default ReadBookShelf;
