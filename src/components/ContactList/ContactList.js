import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} info={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
