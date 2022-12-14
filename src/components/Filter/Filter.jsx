import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "reduxStore/contactSlice";
import css from "./Filter.module.css";

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input className={css.filterInput} type="text" name="filter" value={filter} onChange={(e) => {dispatch(filterChange(e.target.value))}} />
    </label>
  )
}