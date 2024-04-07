import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
   const dispatch = useDispatch();
   const searchId = useId();
   const filteredName = useSelector(selectNameFilter);

   const searchInput = (e) => {
     dispatch(changeFilter(e.target.value));
   };

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        id={searchId}
        value={filteredName}
        onChange={searchInput}
      />
    </div>
  );
};
