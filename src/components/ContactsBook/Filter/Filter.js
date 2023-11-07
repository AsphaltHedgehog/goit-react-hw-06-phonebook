
import css from './filter.module.css'

import { useDispatch, useSelector } from "react-redux";

import { setContactsFilter } from 'redux/actions';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()

  return (
    <input
      type="text"
      name='filter'
      value={filter}
      onChange={(event) => dispatch(setContactsFilter(event.target.value))}
      placeholder="find contacts by name"
      className={css.input}
    ></input>
  );
};

export default Filter;