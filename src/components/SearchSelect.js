import React, { Component } from 'react';
import { Select } from 'antd';
import _ from 'lodash';
import Fuse from 'fuse.js';

import { SEARCH_TERMS } from '../config/constants';

class SearchSelect extends Component {
  _fuzzySearchOptions = {
    distance: 5,
    location: 0,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.5,
    tokenize: true,
  }

  render = () => (
    <Select style={{ width: '300px' }}
            onSearch={this._onSearch}
            placeholder="Search other books"
            id="search_input"
            showSearch={true}
            filterOption={this._filterOption}
            optionFilterProp="value"
            onSelect={this.onSelect}>
      {this._renderOptions()}
    </Select>
  )

  onSelect = (query) => {
    const element = document.querySelector('#search_input');

    if (element) {
      const event = new CustomEvent('select', { detail: query });

      return element.dispatchEvent(event);
    }
  }

  _renderOptions = () => SEARCH_TERMS.map((option, index) => <Select.Option key={index} value={option}>{option}</Select.Option>);

  _filterOption = (input, { props }) => {
    if (_.isEmpty(input)) {
      return true;
    }

    const fuzzySearch = new Fuse([props.value], this._fuzzySearchOptions);
    const result = fuzzySearch.search(input);

    return !_.isEmpty(result);
  }
}

export default SearchSelect;
