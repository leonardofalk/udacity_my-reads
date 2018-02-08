import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const mapShelfToProps = ({ shelfName }) => ({
  'currentlyReading': { type: 'eye', text: 'Currently Reading' },
  'read': { type: 'book', text: 'Want to Read' },
  'wantToRead': { type: 'check', text: 'Read' },
}[shelfName]);

const CurrentShelfIcon = (props) => {
  const actualProps = mapShelfToProps(props);

  return <Icon type={actualProps.type}>{actualProps.text}</Icon>;
};

CurrentShelfIcon.propTypes = {
  shelfName: PropTypes.string.isRequired,
};

export default CurrentShelfIcon;
