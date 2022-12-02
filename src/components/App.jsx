import  React, {Component} from "react";
import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import {nanoid} from "nanoid"


class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
};

addContact = ({name, number}) => {
  

  const contact = {
    id: nanoid(),
    name,
    number
  }

  this.setState(pervState => ({
    contacts: [contact, ...pervState.contacts],
  }))
}


handleDeleteContact = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}))
};


render() {
const {contacts} =this.state;


  return (
    <div className="container">
    <ContactEditor onSubmit={this.addContact}/>
    <h2 className="title">Contacts</h2>
    <ContactList contacts={contacts} onDeleteContact={this.handleDeleteContact}/>
    </div>
  )

}
};

export default App;
