import { useId } from "react";

import s from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  return (
    <div className={s.formContainer}>
      <label className={s.formLabel} htmlFor={nameId}>
        Name
      </label>
      <label className={s.formLabel} htmlFor={numberId}>
        Number
      </label>
      <button
        className={s.formButton}
        type="submit"
        // disabled={isSubmitting}
      >
        Add contact
      </button>
    </div>
  );
};

export default ContactForm;
