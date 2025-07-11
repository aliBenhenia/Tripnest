'use client';

import { useState } from 'react';
import {
  Carousel,
  Typography,
  Rate,
  Tag,
  DatePicker,
  Select,
  InputNumber,
  Button,
  Card,
  Collapse,
  Modal,
  message,
  Row,
  Col,
  Image,
  List,
  Avatar,
} from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

export default function HotelDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [room, setRoom] = useState('');
  const [guests, setGuests] = useState(1);

  const handleBook = () => {
    if (!date || !room) {
      return message.error('Please select a date and room type!');
    }
    setModalOpen(true);
  };

  return (
    <main style={{ height: '100vh', overflowY: 'scroll', background: '#f5f5f5', padding: 16 }}>
      {/* Hotel Hero Carousel */}
      <Carousel autoplay>
        {['hotel', 'resort', 'spa'].map((tag, i) => (
          <div key={i}>
            <img
              src={`https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=`}
              style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
              alt={`hotel-${tag}`}
            />
          </div>
        ))}
      </Carousel>

      {/* Hotel Info */}
      <div style={{ padding: 24 }}>
        <Title level={2}>Grand Palace Hotel</Title>
        <Rate allowHalf disabled defaultValue={4.5} />
        <Paragraph type="secondary">📍 Marrakech, Morocco</Paragraph>
        <div style={{ marginBottom: 16 }}>
          {['Free WiFi', 'Spa', 'Breakfast', 'Gym', 'Pool'].map((t) => (
            <Tag key={t} color="blue">
              {t}
            </Tag>
          ))}
        </div>

        {/* Booking Card */}
        <Card style={{ marginBottom: 32 }}>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <DatePicker onChange={(val) => setDate(val)} style={{ width: '100%' }} />
            </Col>
            <Col xs={24} sm={8}>
              <Select
                placeholder="Room Type"
                onChange={(val) => setRoom(val)}
                style={{ width: '100%' }}
              >
                <Option value="single">Single Room</Option>
                <Option value="double">Double Room</Option>
                <Option value="suite">Suite</Option>
              </Select>
            </Col>
            <Col xs={24} sm={4}>
              <InputNumber
                min={1}
                value={guests}
                onChange={(val) => setGuests(val)}
                style={{ width: '100%' }}
              />
            </Col>
            <Col xs={24} sm={4}>
              <Button type="primary" block onClick={handleBook}>
                Book
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Description */}
        <Collapse defaultActiveKey={['1']} ghost>
          <Panel header="Hotel Description" key="1">
            <Paragraph>
              Welcome to Grand Palace Hotel, an oasis of luxury and comfort. Enjoy top-class service,
              world-class spa, gourmet dining, and stunning views of the city. Our hotel blends modern
              design with Moroccan heritage to offer you an unforgettable stay.
            </Paragraph>
          </Panel>
        </Collapse>

        {/* Gallery */}
        <Title level={4} style={{ marginTop: 32 }}>
          Gallery
        </Title>
        <Image.PreviewGroup>
          <Row gutter={[16, 16]}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col xs={12} sm={8} md={6} key={i}>
                <Image
                  width="100%"
                  height={150}
                  style={{ objectFit: 'cover' }}
                  src={`https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=`}
                  alt="gallery-img"
                />
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>

        {/* Reviews */}
        <Title level={4} style={{ marginTop: 40 }}>
          Guest Reviews
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              name: 'Sarah A.',
              comment: 'Beautiful hotel with great amenities!',
              avatar: 'https://i.pravatar.cc/100?img=12',
              rating: 5,
            },
            {
              name: 'John D.',
              comment: 'Location is perfect, service was top-notch.',
              avatar: 'https://i.pravatar.cc/100?img=5',
              rating: 4.5,
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<span>{item.name}</span>}
                description={
                  <>
                    <Rate disabled defaultValue={item.rating} />
                    <p>{item.comment}</p>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => {
          setModalOpen(false);
          message.success('Booking confirmed!');
        }}
        title="Confirm Booking"
      >
        <p>
          <b>Room:</b> {room}
        </p>
        <p>
          <b>Date:</b> {date?.format('YYYY-MM-DD')}
        </p>
        <p>
          <b>Guests:</b> {guests}
        </p>
      </Modal>
    </main>
  );
}
