/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props) {
  let _names=null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(e) {
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);
  }

  return(
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default connect()(NewTicketForm);