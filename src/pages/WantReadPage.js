import React from 'react';
import WantReadBookShelf from '../components/WantReadBookShelf';

import AbstractPage from './AbstractPage';

const WantReadPage = () => {
  const props = {
    component: WantReadBookShelf,
    type: 'wantToRead',
    breadcrumb: [
      {
        route: '/',
        name: 'Home'
      },
      'WantRead'
    ]
  };

  return <AbstractPage { ...props }/>;
}

export default WantReadPage;
