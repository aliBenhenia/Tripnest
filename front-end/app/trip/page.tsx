'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Select,
  notification,
  Space,
  Tag,
  Spin,
} from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

type Stop = {
  id: string;
  name: string;
  description: string;
  images: string[];
  category: string;
};

const initialStops: Stop[] = [
  {
    id: '1',
    name: 'Paris - Eiffel Tower',
    description: 'Visit the iconic Eiffel Tower and enjoy the view.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Sightseeing',
  },
  {
    id: '2',
    name: 'Rome - Colosseum',
    description: 'Explore the ancient Roman Colosseum.',
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/square240/194578459.webp?k=6fc8fdb2450ce3aac7049a9e6c1170bbce06e722163bd65fa84084eeb52eda4f&o=',
    ],
    category: 'Historical',
  },
  {
    id: '3',
    name: 'Venice - Gondola Ride',
    description: 'Enjoy a romantic gondola ride on Venice canals.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526483360654-2284d43a72ef?auto=format&fit=crop&w=600&q=80',
    ],
    category: 'Relaxation',
  },
];

export default function TripPlanner() {
  // States for dynamic imports (no SSR hydration issues)
  const [DragDropContext, setDragDropContext] = useState<any>(null);
  const [Droppable, setDroppable] = useState<any>(null);
  const [Draggable, setDraggable] = useState<any>(null);
  const [Swiper, setSwiper] = useState<any>(null);
  const [SwiperSlide, setSwiperSlide] = useState<any>(null);

  // Trip stops state
  const [stops, setStops] = useState<Stop[]>(initialStops);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStop, setEditingStop] = useState<Stop | null>(null);

  // Form instance
  const [form] = Form.useForm();

  // Load react-beautiful-dnd and swiper dynamically on client
  useEffect(() => {
    async function loadDependencies() {
      const dnd = await import('react-beautiful-dnd');
      setDragDropContext(() => dnd.DragDropContext);
      setDroppable(() => dnd.Droppable);
      setDraggable(() => dnd.Draggable);

      const swiper = await import('swiper/react');
      setSwiper(() => swiper.Swiper);
      setSwiperSlide(() => swiper.SwiperSlide);

      // import swiper styles dynamically (only on client)
      await import('swiper/css');
      await import('swiper/css/navigation');
      await import('swiper/css/pagination');
    }
    loadDependencies();
  }, []);

  // Handle drag end (reorder stops)
  function onDragEnd(result: any) {
    if (!result.destination) return;

    const reordered = Array.from(stops);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);

    setStops(reordered);
    notification.success({
      message: 'Trip stops reordered',
      description: `"${removed.name}" moved to position ${result.destination.index + 1}`,
      placement: 'bottomRight',
    });
  }

  // Open modal for new stop
  function openNewStopModal() {
    setEditingStop(null);
    form.resetFields();
    setIsModalOpen(true);
  }

  // Open modal to edit a stop
  function openEditStopModal(stop: Stop) {
    setEditingStop(stop);
    form.setFieldsValue(stop);
    setIsModalOpen(true);
  }

  // Delete stop
  function deleteStop(id: string) {
    Modal.confirm({
      title: 'Delete Stop?',
      content: 'Are you sure you want to remove this stop from your trip?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setStops(stops.filter((stop) => stop.id !== id));
        notification.info({
          message: 'Stop removed',
          placement: 'bottomRight',
        });
      },
    });
  }

  // Handle modal submit (add or edit)
  async function onModalFinish(values: any) {
    const imagesArray = values.images
      ? values.images.split(',').map((url: string) => url.trim())
      : [];

    if (editingStop) {
      // edit
      setStops((prev) =>
        prev.map((stop) =>
          stop.id === editingStop.id ? { ...stop, ...values, images: imagesArray } : stop,
        ),
      );
      notification.success({ message: 'Stop updated', placement: 'bottomRight' });
    } else {
      // add new
      const newStop: Stop = {
        id: Date.now().toString(),
        ...values,
        images: imagesArray,
      };
      setStops((prev) => [...prev, newStop]);
      notification.success({ message: 'Stop added', placement: 'bottomRight' });
    }
    setIsModalOpen(false);
  }

  // Filter stops by category
  const filteredStops =
    filterCategory === 'All' ? stops : stops.filter((stop) => stop.category === filterCategory);

  // Loading fallback until dnd & swiper load
  if (!DragDropContext || !Droppable || !Draggable || !Swiper || !SwiperSlide) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f0f2f5',
        }}
      >
        <Spin size="large" tip="Loading Trip Planner..." />
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100vh',
        padding: 24,
        background: '#f0f2f5',
        overflowY: 'auto',
      }}
    >
      <Title style={{ textAlign: 'center', marginBottom: 24 }}>
        🌍 Your Trip Planner
      </Title>

      {/* Filter */}
      <Space style={{ marginBottom: 16 }} wrap>
        <Text strong>Filter by category:</Text>
        <Select
          style={{ width: 160 }}
          value={filterCategory}
          onChange={setFilterCategory}
          options={[
            { label: 'All', value: 'All' },
            { label: 'Sightseeing', value: 'Sightseeing' },
            { label: 'Historical', value: 'Historical' },
            { label: 'Relaxation', value: 'Relaxation' },
          ]}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={openNewStopModal}>
          Add New Stop
        </Button>
      </Space>

      {/* Drag and drop stops */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tripStops" direction="vertical">
          {(provided: any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Row gutter={[24, 24]}>
                {filteredStops.length === 0 && (
                  <Col span={24}>
                    <Text type="secondary">No stops found for selected category.</Text>
                  </Col>
                )}
                {filteredStops.map((stop, index) => (
                  <Draggable key={stop.id} draggableId={stop.id} index={index}>
                    {(provided: any, snapshot: any) => (
                      <Col
                        xs={24}
                        sm={12}
                        md={8}
                        lg={6}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          hoverable
                          style={{
                            borderRadius: 10,
                            border: snapshot.isDragging ? '2px solid #1890ff' : undefined,
                            boxShadow: snapshot.isDragging
                              ? '0 8px 16px rgba(24,144,255,0.2)'
                              : '0 2px 8px rgba(0,0,0,0.1)',
                            cursor: 'grab',
                          }}
                          actions={[
                            <EditOutlined
                              key="edit"
                              onClick={() => openEditStopModal(stop)}
                            />,
                            <DeleteOutlined
                              key="delete"
                              onClick={() => deleteStop(stop.id)}
                            />,
                          ]}
                        >
                          {/* Image slider */}
                          {stop.images.length > 0 && (
                            <Swiper
                              spaceBetween={10}
                              slidesPerView={1}
                              pagination={{ clickable: true }}
                              style={{ borderRadius: '10px 10px 0 0', marginBottom: 12 }}
                            >
                              {stop.images.map((img, i) => (
                                <SwiperSlide key={i}>
                                  <img
                                    src={img}
                                    alt={`${stop.name} pic ${i + 1}`}
                                    style={{
                                      width: '100%',
                                      height: 160,
                                      objectFit: 'cover',
                                      borderRadius: '10px 10px 0 0',
                                    }}
                                    loading="lazy"
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          )}

                          <Card.Meta
                            title={
                              <Space direction="vertical" size={0}>
                                <Text strong>{stop.name}</Text>
                                <Tag color="blue">{stop.category}</Tag>
                              </Space>
                            }
                            description={stop.description}
                          />
                        </Card>
                      </Col>
                    )}
                  </Draggable>
                ))}
              </Row>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add/Edit Modal */}
      <Modal
        open={isModalOpen}
        title={editingStop ? 'Edit Trip Stop' : 'Add New Trip Stop'}
        okText={editingStop ? 'Update' : 'Add'}
        cancelText="Cancel"
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onModalFinish}
          initialValues={{ category: 'Sightseeing' }}
        >
          <Form.Item
            label="Stop Name"
            name="name"
            rules={[{ required: true, message: 'Please enter stop name' }]}
          >
            <Input placeholder="E.g. Paris - Eiffel Tower" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={3} placeholder="Describe this stop" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select>
              <Option value="Sightseeing">Sightseeing</Option>
              <Option value="Historical">Historical</Option>
              <Option value="Relaxation">Relaxation</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Images URLs (comma separated)"
            name="images"
            tooltip="Add one or multiple image URLs, separated by commas"
          >
            <Input placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
