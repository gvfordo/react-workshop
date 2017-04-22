import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactSearch from './ContactSearch';

class ContactsIndex extends Component {

  render() {
    return (
      <div>
        <ContactSearch />
        <ContactList />
      </div>
    );
  }
}

export default ContactsIndex;
