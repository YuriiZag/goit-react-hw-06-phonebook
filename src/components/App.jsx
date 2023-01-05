
import { Phonebook } from './phonebook/phonebook';
import { Contacts } from './contacts/contacts';

if (localStorage.getItem('contacts') === null) {
  localStorage.setItem('contacts', JSON.stringify([]));
}

export const App = () => {
  return (
    <>
      <Phonebook></Phonebook>
      <Contacts></Contacts>
    </>
  );
};
