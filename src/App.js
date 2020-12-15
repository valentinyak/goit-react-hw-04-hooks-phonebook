import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  addContact = e => {
    const { nameInput, phoneInput } = e.target.form;
    const { checkAddedContact, clearInputs } = this;

    e.preventDefault();

    if (checkAddedContact(e)) {
      alert(`${nameInput.value} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      const contacts = prevState.contacts.concat({
        id: shortid.generate(),
        name: nameInput.value,
        number: phoneInput.value,
      });

      clearInputs(e);

      return {
        contacts,
        filter: '',
      };
    });
  };

  clearInputs(e) {
    const { nameInput, phoneInput } = e.target.form;

    nameInput.value = '';
    phoneInput.value = '';
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  checkAddedContact = e => {
    return this.state.contacts.find(
      contact => contact.name === e.target.form.nameInput.value,
    );
  };

  deleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.target.id,
      ),
    });
  };

  render() {
    const {
      getFilteredContacts,
      addContact,
      changeFilter,
      deleteContact,
    } = this;
    const filteredContacts = getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter onChange={changeFilter} />

        <ContactList contacts={filteredContacts} onClick={deleteContact} />
      </div>
    );
  }
}

export default App;
