import { Form, Input, Row, Col, Button } from "antd";
import React from "react";

function FormList() {
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
      <Row>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Gmail" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input placeholder="Number" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FormList;

// const CustomForm = () => {
//   const onFinish = (values) => {
//     console.log("Received values:", values);
//   };

//   return (
//     <Form
//       name="custom_form"
//       onFinish={onFinish}
//       labelCol={{ span: 6 }}
//       wrapperCol={{ span: 12 }}
//     >
//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input placeholder="Enter your name" />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item
//             name="lastname"
//             label="Last Name"
//             rules={[{ required: true, message: "Please enter your last name" }]}
//           >
//             <Input placeholder="Enter your last name" />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Row gutter={16}>
//         <Col span={12}>
//           <Form.Item
//             name="gmail"
//             label="Gmail"
//             rules={[{ required: true, message: "Please enter your Gmail" }]}
//           >
//             <Input placeholder="Enter your Gmail" />
//           </Form.Item>
//         </Col>
//         <Col span={12}>
//           <Form.Item
//             name="number"
//             label="Number"
//             rules={[{ required: true, message: "Please enter your number" }]}
//           >
//             <Input placeholder="Enter your number" />
//           </Form.Item>
//         </Col>
//       </Row>

//       <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

//  export default CustomForm;
