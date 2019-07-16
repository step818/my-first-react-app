import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

function Admin(props) {
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket > 0) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return(
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList ticketList={props.ticketList} currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes={
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);