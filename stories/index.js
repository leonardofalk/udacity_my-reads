import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/App.css'

import CurrentReadingBookCard from '../src/components/CurrentReadingBookCard'
import WantReadBookCard from '../src/components/WantReadBookCard'
import ReadBookCard from '../src/components/ReadBookCard'
import LoadingSpinner from '../src/components/LoadingSpinner'
import CurrentReadingBookShelf from '../src/components/CurrentReadingBookShelf'
import WantReadBookShelf from '../src/components/WantReadBookShelf'
import ReadBookShelf from '../src/components/ReadBookShelf'

const defaultBookProps = {
  title: 'To Kill a Mockingbird',
  description: 'Harper Lee'
}

const withCoverProps = {
  ...defaultBookProps,
  cover: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
}

const shelfProps = {
  books: [
    withCoverProps,
    withCoverProps,
    withCoverProps,
    withCoverProps,
    withCoverProps,
    withCoverProps
  ]
}

storiesOf('CurrentReadingBookShelf', CurrentReadingBookShelf)
  .add('default', () => <CurrentReadingBookShelf {...shelfProps}/>)

storiesOf('WantReadBookShelf', WantReadBookShelf)
  .add('default', () => <WantReadBookShelf {...shelfProps}/>)

storiesOf('ReadBookShelf', ReadBookShelf)
  .add('default', () => <ReadBookShelf {...shelfProps}/>)

storiesOf('LoadingSpinner', LoadingSpinner)
  .add('default', () => <LoadingSpinner/>)
  .add('size={50}', () => <LoadingSpinner size={50}/>)
  .add('icon="sync" size={50} color="red"', () => <LoadingSpinner icon="sync" size={50} color="red"/>)

storiesOf('CurrentReadingBookCard', CurrentReadingBookCard)
  .add('with cover', () => <CurrentReadingBookCard {...withCoverProps}/>)
  .add('without cover', () => <CurrentReadingBookCard {...defaultBookProps}/>)

storiesOf('WantReadBookCard', WantReadBookCard)
  .add('with cover', () => <WantReadBookCard {...withCoverProps}/>)
  .add('without cover', () => <WantReadBookCard {...defaultBookProps}/>)

storiesOf('ReadBookCard', ReadBookCard)
  .add('with cover', () => <ReadBookCard {...withCoverProps}/>)
  .add('without cover', () => <ReadBookCard {...defaultBookProps}/>)
