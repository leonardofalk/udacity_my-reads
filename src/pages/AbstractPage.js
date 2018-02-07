import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from '../components/LoadingSpinner';
import Breadcrumb from '../components/Breadcrumb';
import { getAllByShelf } from '../services/MyReadsAPI';

class AbstractPage extends Component {
  state = {
    books: []
  }

  render = () => (
    <Fragment>
      <Breadcrumb items={this.props.breadcrumb}/>
      {this._renderComponent()}
    </Fragment>
  )

  _renderComponent = () => {
    if (this.state.books.length > 0) {
      const CustomComponent = this.props.component;

      return <CustomComponent books={this.state.books}/>;
    } else {
      return <LoadingSpinner/>
    }
  }

  componentDidMount = async () => {
    const books = await getAllByShelf(this.props.type);

    return this.setState({ books });
  }
}

AbstractPage.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

export default AbstractPage;
