import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props) {
  // eslint-disable-next-line no-console
  console.log(props.ticketList);
  return(
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={index} />
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;