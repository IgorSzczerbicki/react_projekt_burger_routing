import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {

	state ={
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	};

	render() {

		return (
			<div className={classes.ContactData}>
				<h4>Podaj dane kontaktowe</h4>
				<form>
					<input className={classes.Input} type ='text' name='name' placeholder='Imie' />
					<input className={classes.Input} type ='text' name='email' placeholder='Email' />
					<input className={classes.Input} type ='text' name='street' placeholder='Street' />
					<input className={classes.Input} type ='text' name='postal' placeholder='Kod pocztowy' />
					<Button btnType='Success'>ZAMÓW</Button>
				</form>
			</div>
		)
	}
}

export default ContactData;