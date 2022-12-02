import css from "../ContactList/ContactLIst.module.css"

const ContactLIst = ({contacts, onDeleteContact}) => {
return (
	<ul className={css.contact__list}>{contacts.map(({id, name, number}) => <li key = {id} className={css.contact__item}>
	<p>{name} :</p>
	<p>{number}</p>
	<button className={css.contact__button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
</li>)}
</ul>
)
};

export default ContactLIst;