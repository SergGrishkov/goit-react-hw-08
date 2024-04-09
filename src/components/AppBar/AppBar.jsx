import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import RegistrationMenu from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div className={css.nav}>
      <Navigation />
      <h1 className={css.title}>My Phonebook</h1>
      {isLogin ? <UserMenu /> : <RegistrationMenu />}
    </div>
  );
};

export default AppBar;
