import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Only words")
      .min(3, "must be at least 3 characters")
      .max(50, "must be 50 characters or less")
      .required("this field is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "invalid phone number format")
      .required("this field is required"),
  });

  const handleSubmit = (values, options) => {
    addContact(values);
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.formBox}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" className={s.input} placeholder="Введіть ім'я" />
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field
              name="number"
              className={s.input}
              placeholder="Введіть phone"
            />
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
