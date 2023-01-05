import { addContact } from 'components/redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';
import { getContactsList } from 'components/redux/selectors';
import {
  Header,
  PhonebookForm,
  TypingField,
  Label,
  SubmitButton,
  Container,
} from './phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Phonebook = () => {
  const contactsList = useSelector(getContactsList)
  const dispatch = useDispatch();

  const onSubmitHandler = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;
    if (contactsList.length > 0) {
      const nameList = contactsList.map(contact => contact.name.toLowerCase());
      console.log(nameList);
        if (!nameList.includes(name.value.toLowerCase())) {
          dispatch(
            addContact({
              userId: uuidv4(),
              name: name.value,
              number: number.value,
            })
          );
        } else {
          window.alert(`${name.value} is already in list.`);
        }
    } else {
      dispatch(
        addContact({
          userId: uuidv4(),
          name: name.value,
          number: number.value,
        })
      );
    }
    evt.currentTarget.reset()
  };

  return (
    <Container>
      <Header>Phonebook</Header>
      <PhonebookForm autoComplete="off" onSubmit={onSubmitHandler}>
        <Label htmlFor="name">
          Name
          <TypingField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <TypingField name="number" type="tel" required></TypingField>
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhonebookForm>
    </Container>
  );
};
