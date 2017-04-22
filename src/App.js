import React, { Component } from 'react';
import './App.css';
import ContactsIndex from './components/ContactsIndex.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsIndex />
      </div>
    );
  }
}

export default App;
