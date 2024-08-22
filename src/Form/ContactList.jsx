import { Flex, Form, Row } from "antd";
import React from "react";

function ContactList({ contacts }) {
  return (
    <Flex justify="center" align="flex-start" vertical>
      <h1 style={{ color: "#f5f5f5", margin: "50px 0", fontSize: "20px" }}>
        Contact List
      </h1>
      {contacts.map((contact) => (
        <Row style={{ display: "flex", gap: "10px" }}>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.name}</Form.Item>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.lastName}</Form.Item>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.gmail}</Form.Item>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.number}</Form.Item>
        </Row>
      ))}
    </Flex>
  );
}

export default ContactList;
