import { useState } from 'react';
import shortid from 'shortid';
import { Forma, LabelPhone, InputPhone, Button } from './ContactForm.styled';

function ContactForm({ addUser }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addUser({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <LabelPhone htmlFor={nameInputId}>
        Name:
        <InputPhone
          name="name"
          value={name}
          type="text"
          id={nameInputId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelPhone>
      <LabelPhone htmlFor={numberInputId}>
        Number:
        <InputPhone
          name="number"
          value={number}
          type="tel"
          id={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelPhone>
      <Button type="submit"> Add contact</Button>
    </Forma>
  );
}

export default ContactForm;
