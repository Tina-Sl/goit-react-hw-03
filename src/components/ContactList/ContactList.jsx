import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import contactsData from "./../../assets/contacts.json";

import { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState(contactsData);

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          {...item}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
