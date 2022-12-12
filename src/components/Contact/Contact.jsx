import React from "react"
import css from "../Contact/Contact.module.css"

const Contact = ({name, number, onDeleteContact}) => (
		<div>
			<p>{name} :</p>
			<p>{number}</p>
			<button className={css.contact__button} type="button" onClick={onDeleteContact}>Delete</button>
		</div>
);

export default Contact