import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const userSchema = Yup.object().shape({
    email: Yup.string().min(3, "Too short!").required("Required"),
    password: Yup.string()
      .min(6, "Too short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const userInfo = {
      email: values.email,
      password: values.password,
    };

    dispatch(userLogIn(userInfo));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.mainForm}>
        <div className={css.inputList}>
          <div>
            <label className={css.label} htmlFor={emailId}>
              Your email
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
              Password
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

export default LoginForm;
