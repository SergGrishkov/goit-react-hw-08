import { Box, Modal, Typography } from "@mui/material";
import css from "./ModalDelete.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ModalDelete = ({ isOpen, onClose, contactId }) => {
  const dispatch = useDispatch();
  const style = {
    borderRadius: "8px",
    // backgroundImage: "linear-gradient(#542c04, #ab5703)",
    display: "block",
    padding: "16px",
    width: "480px",
    border: "1px solid black",
  };
  const cssButton = {
    marginTop: "48px",
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  };

  const handleDelete = () => {
    dispatch(deleteContact(contactId))
      .then(() => {
        toast.success("the contact has been deleted");
      })
      .catch(() => {
        toast.error("Sorry, something went wrong.");
      });
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={css.wrapper}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this contact?
        </Typography>
        <Typography id="modal-modal-description" sx={cssButton}>
          <button className={css.button} type="button" onClick={handleDelete}>
            Delete
          </button>
          <button className={css.button} type="button" onClick={onClose}>
            Cancel
          </button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
