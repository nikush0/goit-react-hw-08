import { Field, Formik, Form } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";


export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success(`Successful Log In!`))
      .catch((error) => toast.error(`${error}`));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label className={css.label}>
            Email
            <Field className={css.formInput} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.formInput} type="password" name="password" />
          </label>
        </div>
        <div className={css.btnContainer}>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}