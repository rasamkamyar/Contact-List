import { Form, Input, Row, Col, Button, Flex } from "antd";
import React, { useState } from "react";

function FormList({ formInfo, setFormInfo, setContacts }) {
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInfo((form) => ({ ...form, [name]: value }));
  };
  const addHanlder = () => {
    setContacts((contact) => [...contact, formInfo]);
    setFormInfo({
      name: "",
      lastName: "",
      gmail: "",
      number: "",
    });
  };

  return (
    <>
      <Flex justify="center" align="center">
        <Form
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          style={{ margin: "20px 0" }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item>
                <Input
                  placeholder="Name"
                  size="large"
                  type="text"
                  name="name"
                  value={formInfo.name}
                  onChange={changeHandler}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Input
                  placeholder="Last Name"
                  size="large"
                  type="text"
                  name="lastName"
                  value={formInfo.lastName}
                  onChange={changeHandler}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item>
                <Input
                  placeholder="Gmail"
                  size="large"
                  type="email"
                  name="gmail"
                  value={formInfo.gmail}
                  onChange={changeHandler}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Input
                  placeholder="Number"
                  size="large"
                  type="number"
                  name="number"
                  value={formInfo.number}
                  onChange={changeHandler}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Flex>
      <Flex justify="center">
        <Button style={{ width: "50%" ,color:"#003366",fontWeight:"600" }} onClick={addHanlder}>
          Add Contact
        </Button>
      </Flex>
    </>
  );
}

export default FormList;
