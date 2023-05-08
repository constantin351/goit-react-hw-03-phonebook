import React, { Component } from 'react';
// import Form from './Form';
import ContactAddForm from './Form';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Local Storage
  // см 1ое видео 55ая мин
  componentDidMount() {
    const LScontacts = localStorage.getItem('contactsList');
    const LSparsedContacts = JSON.parse(LScontacts);

    if (LSparsedContacts) {
      this.setState({ contacts: LSparsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }
  //
  //

  onSubmitHandler = data => {
    data.id = nanoid();
    const { contacts } = this.state;

    contacts.some(contact => contact.name === data.name)
      ? alert(`${data.name} is already in the phonebook`)
      : this.setState(({ contacts }) => ({
          contacts: [data, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterInputChange = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContactsArray = () => {
    const { contacts, filter } = this.state;
    const filteredContactsArr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContactsArr;
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="wrapper">
        <h1>Phonebook</h1>

        {/* <Form onSubmit={this.onSubmitHandler} /> */}
        <ContactAddForm onSubmit={this.onSubmitHandler} />

        <h2>Contacts</h2>

        <Filter onFilterInputChange={this.onFilterInputChange} value={filter} />

        <ContactList
          contacts={this.filteredContactsArray()}
          onDeleteBtnClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
