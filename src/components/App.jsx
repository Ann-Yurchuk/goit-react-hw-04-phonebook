import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'hooks/userLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter';
import { data } from '../data/data';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', data);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const addContact = data => {
    const { name, number } = data;
    const searchSameName = contacts.find(cont => cont.name === name);

    if (searchSameName) {
      return alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      return alert('Fields must be filled!');
    }
    setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [filter, contacts]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactForm addUser={addContact} />
      </Section>
      <Section title="Contacts">
        <>
          <Filter value={filter} onChange={changeFilter} />
          {visibleContacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              deleteContact={deleteContact}
            />
          )}
        </>
      </Section>
    </div>
  );
}

export default App;
