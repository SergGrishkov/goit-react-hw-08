import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";
import * as Yup from "yup";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nickNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    const userInfo = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(userRegister(userInfo))
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    actions.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").required("Required"),
    email: Yup.string().min(3, "Too short!").required("Required"),
    password: Yup.string()
      .min(6, "Too short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.inputBox}>
          <div>
            <label className={css.label} htmlFor={nickNameId}>
              Username
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nickNameId}
            />
            <ErrorMessage
              name="name"
              component="span"
              style={{ color: "red" }}
            />
          </div>
          <div className={css.inputItem}>
            <label className={css.label} htmlFor={emailId}>
              Email
            </label>
            <Field
              className={css.input}
              type="text"
              name="email"
              id={emailId}
            />
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: "red" }}
            />
          </div>
          <div className={css.inputItem}>
            <label className={css.label} htmlFor={passwordId}>
              Password{" "}
            </label>
            <Field
              className={css.input}
              type="text"
              name="password"
              id={passwordId}
            />
            <ErrorMessage
              name="password"
              component="span"
              style={{ color: "red" }}
            />
          </div>
          <button className={css.button} type="submit">
            Confirm
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
