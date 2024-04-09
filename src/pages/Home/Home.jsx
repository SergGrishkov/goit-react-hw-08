import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      {!isLoggedIn && (
        <p className={css.textLast}>Register to use the phonebook.</p>
      )}
    </div>
  );
};

export default Home;
