import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

// import { useState } from "react";
// import "./App.css";

function App() {
  // const [desiredContact, setDesiredContact] = useState("");
  // const desiredContact = "";
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* <SearchBox value={desiredContact} /> */}
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
