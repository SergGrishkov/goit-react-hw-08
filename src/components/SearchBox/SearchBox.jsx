import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const filteredName = useSelector(selectNameFilter);

  const searchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBar}>
      <label htmlFor={searchId}>Find contacts</label>
      <input
        id={searchId}
        className={css.textInput}
        type="text"
        value={filteredName}
        onChange={searchInput}
        placeholder="Enter name or number"
      />
    </div>
  );
};

export default SearchBox;
