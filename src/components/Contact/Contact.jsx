import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import ModalDelete from "../Modal/ModalDelete";
import css from "./Contact.module.css";


export const Contact = ({ contacts: { name, number, id } }) => {
  const [isOpen, setIsOpen] = useState(false);

   const handleOpen = () => {
     setIsOpen(true);
   };

   const handleClose = () => {
     setIsOpen(false);
   };

   return (
     <div className={css.container}>
       <div>
         <p className={css.paragraphName}>
           <BsFillPersonFill className={css.icon} />
           {name}
         </p>
         <p>
           <FaPhone className={css.user} />
           {number}
         </p>
       </div>
       <button className={css.button} type="button" onClick={handleOpen}>
         Delete
       </button>
       <ModalDelete isOpen={isOpen} onClose={handleClose} contactId={id} />
     </div>
   );
};
