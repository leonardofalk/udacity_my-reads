import React from 'react';
import {Breadcrumb as AntBreadcrumb} from 'antd';
import {Link} from 'react-router-dom';

import styles from './styles/Breadcrumb';

const _renderCrumbItems = ({items}) => {
  return items.map((item, key) => {
    if (item && item.hasOwnProperty('name') && item.hasOwnProperty('route')) {
      const {
        breadcrumbProps = {},
        linkProps = {}
      } = item;

      return (<AntBreadcrumb.Item key={key} {...breadcrumbProps}>
        <Link {...linkProps} to={item.route}>{item.name}</Link>
      </AntBreadcrumb.Item>);
    } else {
      return (<AntBreadcrumb.Item key={key}>{item}</AntBreadcrumb.Item>);
    }
  });
};

const Breadcrumb = (props) => (<AntBreadcrumb {...props} style={styles.breadcrumb}>
  {_renderCrumbItems(props)}
</AntBreadcrumb>);

export default Breadcrumb;
