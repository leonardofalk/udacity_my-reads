import React from 'react';
import CurrentReadingBookShelf from '../components/CurrentReadingBookShelf';

import AbstractPage from './AbstractPage';

const CurrentlyReadingPage = () => {
  const props = {
    component: CurrentReadingBookShelf,
    type: 'currentlyReading',
    breadcrumb: [
      {
        route: '/',
        name: 'Home'
      },
      'Currently Reading'
    ]
  };

  return <AbstractPage { ...props }/>;
}

export default CurrentlyReadingPage;
