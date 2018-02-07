import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import CurrentlyReadingPage from '../pages/CurrentlyReadingPage';
import WantReadPage from '../pages/WantReadPage';
import ReadPage from '../pages/ReadPage';
import SearchPage from '../pages/SearchPage';

const Routes = () => (<Fragment>
  <Route exact={true} path="/" component={CurrentlyReadingPage}/>
  <Route exact={true} path="/currently_reading" component={CurrentlyReadingPage}/>
  <Route exact={true} path="/want_read" component={WantReadPage}/>
  <Route exact={true} path="/read" component={ReadPage}/>
  <Route exact={true} path="/search" component={SearchPage}/>
</Fragment>)

export default Routes;
