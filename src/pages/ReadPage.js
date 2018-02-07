import React from 'react';
import ReadBookShelf from '../components/ReadBookShelf';

import AbstractPage from './AbstractPage';

const ReadPage = () => {
  const props = {
    component: ReadBookShelf,
    type: 'read',
    breadcrumb: [
      {
        route: '/',
        name: 'Home'
      },
      'Read'
    ]
  };

  return <AbstractPage { ...props }/>;
}

export default ReadPage;
