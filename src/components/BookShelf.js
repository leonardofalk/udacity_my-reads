import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import styles from './styles/BookShelf';

class BookShelf extends Component {
  render = () => (
    <Row justify="center" align="middle" style={styles.row}>
      <Col key={-1} push={2}/>
      {this.props.books}
    </Row>
  )

  _renderColumns = (books) => books.map((book, key) => <Col key={key} span={4}>{book}</Col>);
}

BookShelf.propTypes = {
  books: PropTypes.array
}

export default BookShelf;
