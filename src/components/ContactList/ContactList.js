import { Item } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
        </Item>
      ))}
    </ul>
  );
};
