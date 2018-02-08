import React from 'react'
import { Icon, Menu, Dropdown } from 'antd'

import BookCard from './BookCard'

import { update } from '../services/MyReadsAPI';

export default class ReadBookCard extends BookCard {
  state = {
    removed: false
  }

  render = () => {
    return <BookCard {...this.props} actions={this._renderActions} active={!this.state.removed}/>
  }

  _renderActions = () => {
    return [
      <Dropdown overlay={this._dropdown()}>
        <Icon type="ellipsis" />
      </Dropdown>
    ]
  }

  _dropdown = () => (
    <Menu onClick={this._dispatchAction}>
      <Menu.SubMenu key="sub1" title="Move to shelf">
        <Menu.Item key="wantToRead">
          <Icon type="book"/> Want to Read Again
        </Menu.Item>
        <Menu.Item key="currentlyReading">
          <Icon type="check"/> Currently Reading
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="noShelf">
        <Icon type="delete"/> Remove from shelf
      </Menu.Item>
    </Menu>
  );

  _dispatchAction = ({ item, key }) => {
    update({ id: this.props.id }, key).then(() => this.setState({ removed: true }));
  }
}
