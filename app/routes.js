import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router';

import AppContainer from './components/AppContainer.jsx'

import NewEventUI from './components/NewEventUI.jsx'
import NewUserUI from './components/NewUserUI.jsx'
import UserScheduleUI from './components/UserScheduleUI.jsx'
import Home from './components/Home.jsx'
//import About from './components/About.jsx'
{/*About Page Links*/
}
//<Route path="/about" component={About}>
//</Route>

//<Route path="/event/new" component={NewEventUI}>
//</Route>
ReactDom.render((
  <Router>
    <Route path="/" component={Home}>
      {/*New Event UI Links*/}

    </Route>
    <Route path="event/new" component={NewEventUI}>
    </Route>
    <Route path="user/new" component={NewUserUI}>
    </Route>
    <Route path="user/:id/schedule" component={UserScheduleUI}>
    </Route>

  </Router>
), document.getElementById('main'))
