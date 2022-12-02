import  React, {Component} from "react";
import PropTypes from "prop-types"
// import css from "../ContactEditor/ContactEditor.module.css"

class ContactEditor extends Component {
	static propTypes={
		onSubmit:PropTypes.func.isRequired
}

state = {
	name: " ",
	number: " "
}

handleChange = e => {
const {name, value} = e.currentTarget;
this.setState({[name]: value})
}

handleSubmit = e => {
	e.preventDefault();

	this.props.onSubmit(this.state)

	this.setState({name: " ", number: " "})
}

render() {
	return (
		<form onSubmit={this.handleSubmit}>
			<input
				type="text" 
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
				onChange={this.handleChange}
				value={this.state.name}
/>
			<input
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
				id="number"
				onChange={this.handleChange}
				value={this.state.number}
			/>
<button type="submit">Add Contact</button>
		</form>
	)
}
};

export default ContactEditor;