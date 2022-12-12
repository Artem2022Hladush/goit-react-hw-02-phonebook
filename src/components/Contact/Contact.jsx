import React from "react"
import css from "../Contact/Contact.module.css"

const Contact = ({name, number, onDeleteContact}) => (
		<div className={css.contact}>
			<p className={css.name}>{name} :</p>
			<p className={css.number}>{number}</p>
			<button className={css.contact__button} type="button" onClick={onDeleteContact}>Delete</button>
		</div>
);

export default Contact