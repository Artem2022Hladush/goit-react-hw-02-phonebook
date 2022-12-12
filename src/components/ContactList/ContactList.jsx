import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";

const ContactLIst = ({contacts, onDeleteContact}) => {
return (
	<ul className={css.contact__list}>{contacts.map(({id, name, number}) => <li key = {id} className={css.contact__item}>
	<Contact 
	name={name} 
	number={number}
	onDeleteContact={() => onDeleteContact(id)}/>
</li>)}
</ul>
)
};

export default ContactLIst;