import { Form, Input, Row, Col, Button, Flex } from "antd";
import React from "react";

function FormList() {
  return (
    <Flex justify="center" align="center">
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        style={{ margin: "20px" }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Name" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Last Name" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Gmail" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Number" size="large" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}

export default FormList;

// const CustomForm = () => {
//   const onFinish = (values) => {
//     console.log("Received values:", values);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Form
//         name="custom_form"
//         onFinish={onFinish}
//         labelCol={{ span: 2 }}
//         wrapperCol={{ span: 22 }}
//       >
//         <Row gutter={16}>
//           <Col span={18}>
//             <Form.Item
//               name="name"
//               rules={[{ required: true, message: "Please enter your name" }]}
//             >
//               <Input placeholder="Enter your name" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="lastname"
//               rules={[
//                 { required: true, message: "Please enter your last name" },
//               ]}
//             >
//               <Input placeholder="Enter your last name" />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="gmail"
//               rules={[{ required: true, message: "Please enter your Gmail" }]}
//             >
//               <Input placeholder="Enter your Gmail" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="number"
//               rules={[{ required: true, message: "Please enter your number" }]}
//             >
//               <Input placeholder="Enter your number" />
//             </Form.Item>
//           </Col>
//         </Row>

//         <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default CustomForm;
