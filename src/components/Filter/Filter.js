import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input value={value} onChange={onChange} />
      </Label>
    </div>
  );
};
