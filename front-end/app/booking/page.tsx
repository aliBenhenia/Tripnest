'use client';

import React from 'react';
import { Card, DatePicker, InputNumber, Input, Button, Form, message, Typography, Row, Col, Divider } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function BookingPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form Submitted:', values);
    message.success('Booking request submitted successfully!');
    form.resetFields();
  };

  // Mock user data (auto-filled)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8901',
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-24">
      <Title level={2} style={{ marginBottom: 20 }}>Booking Request</Title>

      <Row gutter={[24, 24]}>
        {/* Left: Form */}
        <Col xs={24} md={14}>
          <Card  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleSubmit}
              initialValues={{
                name: user.name,
                email: user.email,
                phone: user.phone,
                date: dayjs().add(1, 'day'),
                groupSize: 1,
              }}
            >
              <Form.Item name="date" label="Preferred Date" rules={[{ required: true, message: 'Please select a date!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="groupSize" label="Group Size" rules={[{ required: true }]}>
                <InputNumber min={1} max={50} style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="notes" label="Special Requests / Notes">
                <TextArea rows={4} placeholder="Tell us anything you'd like us to know..." />
              </Form.Item>

              <Divider />

              <Title level={4}>Contact Details</Title>

              <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                <Input prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input prefix={<MailOutlined />} />
              </Form.Item>

              <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                <Input prefix={<PhoneOutlined />} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Submit Booking Request
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Right: Summary */}
        <Col xs={24} md={10}>
          <Card
            
            cover={<img src="https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=" alt="Activity" />}
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          >
            <Title level={4}>Eiffel Tower Sunset Tour</Title>
            <Text type="secondary">Paris, France</Text>
            <Divider />
            <Text><strong>Duration:</strong> 2 hours</Text><br />
            <Text><strong>Price:</strong> $29 per person</Text><br />
            <Text><strong>Hosted by:</strong> Paris Tours Co.</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
