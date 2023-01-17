import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = (name, number, id) => {
    this.setState(state => ({
      contacts: [...state.contacts, { name, number, id }],
    }));
  };

  render() {
    return (
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </AppWrapper>
    );
  }
}
