import { Form, Row } from "antd";
import React from "react";

function ContactList({ contacts }) {
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <Row style={{ display: "flex", gap: "10px" }}>
          <Form.Item>{contact.name}</Form.Item>
          <Form.Item>{contact.lastName}</Form.Item>
          <Form.Item>{contact.gmail}</Form.Item>
          <Form.Item>{contact.number}</Form.Item>
        </Row>
      ))}
    </div>
  );
}

export default ContactList;
