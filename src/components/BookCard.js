import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, message } from 'antd'

import styles from './styles/BookCard'

class BookCard extends Component {
  state = {
    active: true,
    cover: '',
    title: '',
    description: ''
  }

  render = () => {
    if (!this.state.active) {
      message.info(`Book "${this.state.title}" has been moved`);

      return '';
    }

    return (
      <Card hoverable={true} cover={this._renderImage()} style={styles.card} actions={this.props.actions()}>
        <Card.Meta title={this.props.title} description={this.props.description} style={styles.meta}/>
      </Card>
    );
  }

  _renderImage = () => {
    const style = Object.assign({backgroundImage: `url('${this.props.cover}')`}, styles.image);

    return <figure style={style}/>;
  }

  componentWillReceiveProps = ({ cover, title, description, active }) => {
    this.setState({ cover, title, description, active });
  }
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string,
  actions: PropTypes.func,
  active: PropTypes.bool
}

BookCard.defaultProps = {
  active: true
}

export default BookCard;
