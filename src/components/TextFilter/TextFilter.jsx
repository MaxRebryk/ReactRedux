import { useDispatch, useSelector } from 'react-redux';
import {
  changeTextFilter,
  selectTextFilter,
} from '../../../redux/filterTextSlice';
import { useId } from 'react';

export default function TextFilter() {
  const id = useId();
  const dispatch = useDispatch();

  const selectFilter = useSelector(selectTextFilter);

  const handleFilter = event => {
    dispatch(changeTextFilter(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        id={id}
        onChange={event => handleFilter(event)}
        value={selectFilter}
      />
    </div>
  );
}
