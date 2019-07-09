import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const ticketInformation = 
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: lightblue;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime} ago</h4>
      </div>
      <hr/>
    </div>;

  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }  
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  ticketId: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
};

export default Ticket;