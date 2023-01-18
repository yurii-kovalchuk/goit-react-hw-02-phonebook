import { Item, Btn } from './Contact.styled';

export const Contact = ({ info: { id, name, number }, onDelete }) => {
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Btn
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Btn>
    </Item>
  );
};
