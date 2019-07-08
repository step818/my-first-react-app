import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const ticketinformation = 
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
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </div>;

    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {alert('hey, just clicked the ticket belonging to ' +       props.names);}}>{ticketInformation}
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
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;