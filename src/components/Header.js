import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';

import SearchSelect from './SearchSelect';
import MenuItemSearchFix from './MenuItemSearchFix';

import styles from './styles/Header';

class Header extends Component {
  render = () => (
    <Layout.Header style={styles.header}>
      <Link to="/">
        <div style={styles.logoContainer}>
          <span style={styles.logoText}>MyReads</span>
        </div>
      </Link>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]} style={styles.headerMenu} onSelect={this.selectHandler}>
        <Menu.Item key="/currently_reading">
          <Link to="/currently_reading">
            <Icon type="eye"/>
            Currently Reading
          </Link>
        </Menu.Item>
        <Menu.Item key="/want_read">
          <Link to="/want_read">
            <Icon type="book"/>
            Want to Read
          </Link>
        </Menu.Item>
        <Menu.Item key="/read">
          <Link to="/read">
            <Icon type="check"/>
            Read
          </Link>
        </Menu.Item>
        <MenuItemSearchFix key="/search">
          <Link to="/search">
            <SearchSelect/>
          </Link>
        </MenuItemSearchFix>
      </Menu>
    </Layout.Header>
  )

  selectHandler = ({ key, item }) => {
    if (key === '/search') {
      return item.props.history.push(key);
    }
  }
}

export default Header;
