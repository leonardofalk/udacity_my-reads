import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import SearchBookShelf from '../components/SearchBookShelf';
import LoadingSpinner from '../components/LoadingSpinner';
import Breadcrumb from '../components/Breadcrumb';
import { search } from '../services/MyReadsAPI';

const breadcrumb = [
  {
    route: '/',
    name: 'Home'
  },
  'Search'
];

class SearchPage extends Component {
  state = {
    query: '',
    loading: false,
    books: []
  }

  _debouncedFetch = _.debounce(() => this._fetchSearch(), 400, { 'maxWait': 400 });

  render = () => (
    <Fragment>
      <Breadcrumb items={breadcrumb}/>
      {this._loadingSpinner()}
      {this._renderPage()}
    </Fragment>
  )

  componentDidMount = () => {
    document.querySelector('#search_input')
            .addEventListener('select', this.onSearchChange.bind(this));
  }

  componentWillUnmount = () => {
    document.querySelector('#search_input')
            .removeEventListener('select', this.onSearchChange.bind(this));
  }

  onSearchChange = ({ detail }) => {
    this.setState({ query: detail, loading: true });

    return this._debouncedFetch();
  }

  _renderPage = () => <SearchBookShelf books={this.state.books}/>;

  _loadingSpinner = () => (this.state.loading ? <LoadingSpinner/> : null);

  _fetchSearch = async () => {
    const { query } = this.state;

    if (query && !_.isEmpty(query)) {
      const books = await search(query);
      this.setState({ books });
    }

    this.setState({ loading: false });
  }
}

export default SearchPage;
