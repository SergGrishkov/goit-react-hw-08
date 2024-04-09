import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNumberId = useId();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(30, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(30, "Too long")
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Format should be 333-22-11"
      )
      .required("Required"),
  });

  const handleSubmit = (value, actions) => {
    const contactInfo = {
      name: value.name,
      number: value.number,
    };
    dispatch(addContact(contactInfo))
      .unwrap()
      .then(() => {
        toast.success("Contact added!");
      })
      .catch(() => {
        toast.error("Sorry, something went wrong.");
      });
    actions.resetForm();
  };

return (
  <Formik
    initialValues={{
      name: "",
      number: "",
    }}
    onSubmit={handleSubmit}
    validationSchema={SignupSchema}
  >
    <Form className={css.form}>
      <div className={css.formInput}>
        <label htmlFor={userNameId}>Name</label>
        <Field
          className={css.formInputField}
          type="text"
          name="name"
          id={userNameId}
        />
        <ErrorMessage name="name" component="span" style={{ color: "red" }} />
      </div>
      <div className={css.formInput}>
        <label htmlFor={userNumberId}>Number</label>
        <Field
          className={css.formInputField}
          type="tel"
          name="number"
          id={userNumberId}
        />
        <ErrorMessage name="number" component="span" style={{ color: "red" }} />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </Form>
  </Formik>
);
};

export default ContactForm;