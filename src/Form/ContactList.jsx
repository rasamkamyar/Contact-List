import { Flex, Form, Row } from "antd";
import React from "react";

function ContactList({ contacts }) {
  return (
    <Flex justify="center" align="flex-start" vertical>
      <h1 style={{ color: "#f5f5f5", margin: "50px 0", fontSize: "20px" }}>
        Contact List
      </h1>
      {contacts.map((contact) => (
        <Row style={{ display: "flex", gap: "70px" }}>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.name}</Form.Item>
          <Form.Item style={{ color: "#f5f5f5" }}>{contact.lastName}</Form.Item>
          <span style={{ position: "relative" }}>
            <Form.Item style={{ color: "#f5f5f5" }}>
              <img
                style={{ position: "absolute", top: "8px", left: "-22px" }}
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/new-post.png"
                alt="new-post"
              />{" "}
              {contact.gmail}
            </Form.Item>
          </span>
          <span style={{ position: "relative" }}>
            <Form.Item style={{ color: "#f5f5f5" }}>
              {" "}
              <img
                style={{ position: "absolute", top: "8px", left: "-19px" }}
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                alt="phone--v1"
              />{" "}
              {contact.number}
            </Form.Item>
          </span>
        </Row>
      ))}
    </Flex>
  );
}

export default ContactList;
{
  (" ");
}
{
  (" ");
}
