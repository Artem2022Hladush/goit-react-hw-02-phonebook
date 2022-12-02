import  {Component} from "react";
import ContactList from "./ContactList/ContactList";


class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
};


handleDeleteContact = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}))
};


render() {
const {contacts} =this.state;


  return (
    <div className="container">
    
    <h2 className="title">Contacts</h2>
    <ContactList contacts={contacts} onDeleteContact={this.handleDeleteContact}/>
    </div>
  )

}
};

export default App;
