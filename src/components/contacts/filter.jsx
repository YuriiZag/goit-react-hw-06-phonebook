import React from 'react';

import { FilterField } from './contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'components/redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter.value)
  const dispatch = useDispatch();

  console.log(filterValue);

  const onFilterChange = (e) => {
    dispatch(update(e.currentTarget.value))
  }

  return (
    <div>
      <p>Find contacts by name</p>
      <form autoComplete="off">
        <label htmlFor="filter">
          <FilterField
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={onFilterChange}
            value={filterValue}
            required
          />
        </label>
      </form>
    </div>
  );
};
