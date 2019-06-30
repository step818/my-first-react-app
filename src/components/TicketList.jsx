import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Skeeter and Doug',
    location: '4B',
    issue: 'Fox image not displaying.'
  },
  {
    names: 'Imani and Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover.'
  }
];

function TicketList() {
  return(
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;