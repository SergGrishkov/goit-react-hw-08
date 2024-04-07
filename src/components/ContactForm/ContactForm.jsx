import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const fieldsValue = {
    name: "",
    number: "",
  };

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
    dispatch(addContact(contactInfo));
    actions.resetForm();
  };


  return (
    <Formik
      initialValues={fieldsValue}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.searchForm}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="p" className={css.info} />
        </div>
        <div className={css.input}>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="p" className={css.info} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
