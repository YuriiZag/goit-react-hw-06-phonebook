import { Filter } from './filter';
import {
  Header,
  DeleteButton,
  Container,
  ContactList,
  ContactName,
  ContactNumber,
} from './contacts.styled';
import { getContactsList, getFilterRequest } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList) 
  const filterRequest = useSelector(getFilterRequest)

  const contactsFilter = () => {
    const normalizedFilter = filterRequest.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDelete = e => {
    dispatch(deleteContact(e.currentTarget.value));
  }

  const contacts = contactsFilter();
  return (
    <Container>
      <Header>Contacts</Header>
      <Filter></Filter>
      <ContactList>
        {contacts.map(({ name, number, userId }) => {
          return (
            <li key={userId}>
              <ContactName>{name}</ContactName>:
              <ContactNumber>{number}</ContactNumber>
              <DeleteButton type="button" value={userId} onClick={onDelete}>
                delete
              </DeleteButton>
            </li>
          );
        })}
      </ContactList>
    </Container>
  );
};


