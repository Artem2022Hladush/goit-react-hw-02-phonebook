import React from "react"
import css from "../Contact/Contact.module.css"
import PropTypes from "prop-types"

const Contact = ({name, number, id, onDelete}) => (
	<li className={css.contact}>
	<p className={css.name}>{name}: </p>
	<p className={css.number}>{number}</p>
	<button className={css.contact__button} type="button" onClick={()=>onDelete(id)}>Delete</button>
</li>
);

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}

export default Contact