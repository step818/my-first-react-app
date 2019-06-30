import React from 'react';
import Ticket from './Ticket';

function TicketList() {
  return(
    <div>
      <h3>Queue List</h3>
      <Ticket
        location="3A"
        names="Thato and Haley"
        issue="Firebase will not save record."/>
    </div>
  );
}

export default TicketList;