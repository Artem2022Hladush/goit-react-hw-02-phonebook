import css from "../ContactList/ContactLIst.module.css"

const ContactLIst = ({contacts}) => {
return (
	<ul className={css.contact__list}>{contacts.map(({id, name, number}) => <li key = {id} className={css.contact__item}>
	<p>{name} :</p>
	<p>{number}</p>
	<button>Delete</button>
</li>)}
</ul>
)
};

export default ContactLIst;