import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';


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
        <Route path='/newticket' component={NewTicketForm} /> 
      </Switch>
    </div>
  );
}

export default App;