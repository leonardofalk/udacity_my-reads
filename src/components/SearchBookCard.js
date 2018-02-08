import React from 'react'
import { Icon, Menu, Dropdown, Button } from 'antd'

import BookCard from './BookCard'
import CurrentShelfIcon from './CurrentShelfIcon';

import { update } from '../services/MyReadsAPI';

class SearchBookCard extends BookCard {
  state = {
    added: false
  }

  render = () => {
    return <BookCard {...this.props} actions={this._renderActions}/>;
  }

  _renderActions = () => {
    if (this.state.added) {
      return [<Icon type="check-circle-o" style={{color: '#52c41a'}} />]
    }

    if (this.props.currentShelf) {
      return [<CurrentShelfIcon shelfName={this.props.currentShelf}/>]
    }

    return [
      <Dropdown overlay={this._dropdown()}>
        <Button>
          Move To ...
        </Button>
      </Dropdown>
    ];
  }

  _dropdown = () => (
    <Menu onClick={this._dispatchAction}>
      <Menu.Item key="currentlyReading">
        <Icon type="eye"/> Currently Reading
      </Menu.Item>
      <Menu.Item key="wantToRead">
        <Icon type="book"/> Want To Read
      </Menu.Item>
      <Menu.Item key="read">
        <Icon type="check"/> Read
      </Menu.Item>
    </Menu>
  )

  _dispatchAction = ({ item, key }) => {
    update({ id: this.props.id }, key).then(() => this.setState({ added: true }));
  }
}

export default SearchBookCard;
