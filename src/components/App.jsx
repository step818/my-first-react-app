import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }
 
  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {[newTicket.id]: newTicket});
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterTicketList[newTicket.id].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticket});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => this.updateTicketElapsedWaitTime(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    var cssStyles = {
      backgroundColor: 'yellow',
      fontFamily: 'sans-serif',
      paddingTop: '100px',
    };
    return (
      <div style={cssStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>}/>
          <Route path='/newticket' render={() =><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList}/>}/>
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>}/>
          <Route component={Error404} /> 
        </Switch>
      </div>
    );
  }
}

export default App;