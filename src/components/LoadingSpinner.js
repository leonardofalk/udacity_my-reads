import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin } from 'antd';

const LoadingSpinner = ({ size = 24, icon = 'loading', color }) => {
  const iconIndicator = <Icon type={icon} style={{ fontSize: size, color }} spin/>

  return <Spin indicator={iconIndicator}/>;
}

LoadingSpinner.propTypes = {
  icon:  PropTypes.string,
  color: PropTypes.string,
  size:  PropTypes.number
}

export default LoadingSpinner;
