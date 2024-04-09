import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { userLogOut } from "../../redux/auth/operations";
import { RxExit } from "react-icons/rx";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const style = {
    fontSize: "20px",
  };

  return (
    <div className={css.titleName}>
      <p className={css.title}>
        Hello <span className={css.spanName}>{user.name}</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(userLogOut())}
      >
        <RxExit style={style} />
      </button>
    </div>
  );
};

export default UserMenu;
