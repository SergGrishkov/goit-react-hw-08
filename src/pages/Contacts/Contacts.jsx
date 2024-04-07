import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import css from "./Contacts.module.css";
import { selectLoader } from "../../redux/auth/selectors";

const Contacts = () => {
  const loading = useSelector(selectLoader);

  return (
    <div className={css.main}>
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default Contacts;
