import "../../../node_modules/modern-normalize/modern-normalize.css";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/contactsOps";
import css from "./App.module.css";

export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
