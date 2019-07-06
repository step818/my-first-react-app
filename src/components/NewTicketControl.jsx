/* eslint-disable no-console */
/* eslint-disable constructor-super */
import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onHandleClick={this.handleClick}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;