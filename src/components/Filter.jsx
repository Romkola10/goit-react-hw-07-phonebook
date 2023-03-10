import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getContacts } from '../redux';
import css from './App.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    dispatch(filterContacts(name));
  }

  return (
    <div className={css.form__filter}>
      <label className={css.form__label}>
        Find contacts by name
        <input className={css.form__input} name="filter" onChange={onFilterChange}></input>
      </label>
      <div className={css.form__label}>Total contacts: {contactList.length}</div>
    </div>
  );
};