
import css from './filter.module.css'

import { useDispatch, useSelector } from "react-redux";

import { setContactsFilter } from 'redux/filterSlice';


import {getStatusFilter} from "redux/selectors";

function Filter() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch()

  console.log(filter);

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