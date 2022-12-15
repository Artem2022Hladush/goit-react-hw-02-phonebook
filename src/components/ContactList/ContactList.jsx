import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";
import PropTypes from "prop-types"

const ContactList = ({contacts, onDelete}) => {
return (
	<ul className={css.contact__list}>
            {contacts.map(({id,name,number})=>
            <Contact key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}/>
            )}
      </ul>
)
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
	})
	),
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;