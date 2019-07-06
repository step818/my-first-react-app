import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';


function App(){
  var cssStyles = {
    backgroundColor: 'yellow',
    fontFamily: 'sans-serif',
    paddingTop: '100px',
  };
  return (
    <div style={cssStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} /> 
      </Switch>
    </div>
  );
}

export default App;