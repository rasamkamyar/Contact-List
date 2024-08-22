import { useState } from "react";
import FormList from "./Form/FormList";
import ContactList from "./Form/ContactList";
import Styles from "./index.module.css";
import { Form, Button, Row } from "antd";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    lastName: "",
    gmail: "",
    number: "",
  });
  const [contacts, setContacts] = useState([]);

  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <header className={Styles.header}>
        <h1>Connectify</h1>
        <h3>Manage your contact list easily</h3>
      </header>
      <FormList
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        setContacts={setContacts}
      />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
