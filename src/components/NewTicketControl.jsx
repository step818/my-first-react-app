/* eslint-disable no-console */
/* eslint-disable constructor-super */
import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forVisibleOnPage: false
    };
  }

  handleClick(){
    console.log('Hey, you clicked me! I think I liked it ;)');
  }

  render() {
    return (
      <div>
        <p>This is the NewTicketControl component</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl;