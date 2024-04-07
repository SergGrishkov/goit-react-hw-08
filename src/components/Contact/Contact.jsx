import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";


export const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.container}>
        <div>
          <p>
            <BsFillPersonFill />
            {name}
          </p>
          <p>
            <FaPhone />
            {number}
          </p>
        </div>
        <button
          type="button"
          className={id}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};
