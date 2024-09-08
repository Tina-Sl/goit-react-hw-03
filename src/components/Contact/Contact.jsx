import { FaUser, FaPhoneAlt } from "react-icons/fa";

import s from "./Contact.module.css";

const Contact = ({
  id,
  // completed,
  name,
  number,
  handleDeleteContact,
}) => {
  return (
    <li className={s.card}>
      <div className={s.cardContext}>
        <span>
          <FaUser /> {name}
        </span>
        <span>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
