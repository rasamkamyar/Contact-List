import { Form, Input } from "antd";
import React from "react";

function FormList() {
  return (
    <Form>
      <Form.Item>
        <Input title="name" style={{ width: "10%" }} placeholder="Name" />
        <Input title="name" style={{ width: "10%" }} placeholder="Last Name" />
        <Input title="name" style={{ width: "10%" }} placeholder="Gmail" />
        <Input title="name" style={{ width: "10%" }} placeholder="Number" />
      </Form.Item>
    </Form>
  );
}

export default FormList;
