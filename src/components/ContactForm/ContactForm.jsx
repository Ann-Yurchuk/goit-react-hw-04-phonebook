import React, { Component } from 'react';
import shortid from 'shortid';
import { Forma, LabelPhone, InputPhone, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Forma onSubmit={this.handleSubmit}>
        <LabelPhone htmlFor={this.nameInputId}>
          Name:
          <InputPhone
            name="name"
            value={name}
            type="text"
            id={this.nameInputId}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelPhone>
        <LabelPhone htmlFor={this.numberInputId}>
          Number:
          <InputPhone
            name="number"
            value={number}
            type="tel"
            id={this.numberInputIdn}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelPhone>
        <Button type="submit"> Add contact</Button>
      </Forma>
    );
  }
}
