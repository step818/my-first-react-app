import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Error404 from './Error404';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';


class App extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => this.updateTicketElapsedWaitTime(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    console.log(this.state.masterTicketList);
    var cssStyles = {
      backgroundColor: 'yellow',
      fontFamily: 'sans-serif',
      paddingTop: '100px',
    };
    return (
      <div style={cssStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>}/>
          <Route path='/newticket' render={() =><NewTicketControl />}/>
          <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>}/>
          <Route component={Error404} /> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));