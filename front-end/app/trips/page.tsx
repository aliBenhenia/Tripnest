'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
  Drawer,
  Form,
  Input,
  Select,
  notification,
  Space,
  Tag,
  Spin,
  Empty,
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

export default function TripPlannerDrawer() {
  // Dynamic imports for drag-n-drop and swiper (no SSR issues)
  const [DragDropContext, setDragDropContext] = useState<any>(null);
  const [Droppable, setDroppable] = useState<any>(null);
  const [Draggable, setDraggable] = useState<any>(null);
  const [Swiper, setSwiper] = useState<any>(null);
  const [SwiperSlide, setSwiperSlide] = useState<any>(null);

  // Trip stops state
  const [stops, setStops] = useState<Stop[]>(initialStops);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Drawer and form states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStop, setEditingStop] = useState<Stop | null>(null);
  const [form] = Form.useForm();

  // Load DnD and Swiper dynamically on client only
  useEffect(() => {
    async function loadDeps() {
      const dnd = await import('react-beautiful-dnd');
      setDragDropContext(() => dnd.DragDropContext);
      setDroppable(() => dnd.Droppable);
      setDraggable(() => dnd.Draggable);

      const swiper = await import('swiper/react');
      setSwiper(() => swiper.Swiper);
      setSwiperSlide(() => swiper.SwiperSlide);

      await import('swiper/css');
      await import('swiper/css/navigation');
      await import('swiper/css/pagination');
    }
    loadDeps();
  }, []);

  // Drag end handler (reorder stops)
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

  // Open drawer and reset form for new stop
  function openAddStop() {
    setIsEditing(false);
    setEditingStop(null);
    form.resetFields();
    setDrawerOpen(true);
  }

  // Open drawer for editing a stop
  function openEditStop(stop: Stop) {
    setIsEditing(true);
    setEditingStop(stop);
    form.setFieldsValue({
      ...stop,
      images: stop.images.join(', '),
    });
    setDrawerOpen(true);
  }

  // Delete stop confirmation and delete
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

  // Handle form submit (add or edit stop)
  function onFinish(values: any) {
    const imagesArr = values.images
      ? values.images.split(',').map((url: string) => url.trim())
      : [];

    if (isEditing && editingStop) {
      setStops((prev) =>
        prev.map((stop) =>
          stop.id === editingStop.id ? { ...stop, ...values, images: imagesArr } : stop,
        ),
      );
      notification.success({ message: 'Stop updated', placement: 'bottomRight' });
    } else {
      const newStop: Stop = {
        id: Date.now().toString(),
        ...values,
        images: imagesArr,
      };
      setStops((prev) => [...prev, newStop]);
      notification.success({ message: 'Stop added', placement: 'bottomRight' });
    }
    setDrawerOpen(false);
    form.resetFields();
  }

  // Filter stops
  const filteredStops =
    filterCategory === 'All' ? stops : stops.filter((stop) => stop.category === filterCategory);

  // Loading state while dynamic imports are not ready
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
    <div style={{ padding: 24, minHeight: '100vh', background: '#fafafa' }}>
      <Title style={{ textAlign: 'center', marginBottom: 30 }}>
        🌍 Trip Planner with Drawer
      </Title>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        onClick={openAddStop}
        style={{ marginBottom: 24, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Plan a Trip
      </Button>

      {stops.length === 0 && (
        <Empty description="No stops planned yet. Click 'Plan a Trip' to add stops!" />
      )}

      {/* Show stops overview on main page (optional) */}
      <Row gutter={[24, 24]}>
        {filteredStops.map((stop) => (
          <Col xs={24} sm={12} md={8} lg={6} key={stop.id}>
            <Card
              hoverable
              cover={
                stop.images.length > 0 && (
                  <img
                    src={stop.images[0]}
                    alt={stop.name}
                    style={{ height: 160, objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                    loading="lazy"
                  />
                )
              }
              actions={[
                <EditOutlined key="edit" onClick={() => openEditStop(stop)} />,
                <DeleteOutlined key="delete" onClick={() => deleteStop(stop.id)} />,
              ]}
              style={{ borderRadius: 10 }}
            >
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
        ))}
      </Row>

      {/* Drawer for Plan Trip UI */}
      <Drawer
        title={isEditing ? 'Edit Trip Stop' : 'Plan Your Trip'}
        width={720}
        onClose={() => {
          setDrawerOpen(false);
          form.resetFields();
          setEditingStop(null);
          setIsEditing(false);
        }}
        open={drawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <Space style={{ float: 'right' }}>
            <Button
              onClick={() => {
                setDrawerOpen(false);
                form.resetFields();
                setEditingStop(null);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={() => form.submit()}>
              {isEditing ? 'Update Stop' : 'Add Stop'}
            </Button>
          </Space>
        }
        destroyOnClose
      >
        {/* Filter category selector */}
        <Space style={{ marginBottom: 20 }} wrap>
          <Text strong>Filter Stops by Category:</Text>
          <Select
            style={{ width: 180 }}
            value={filterCategory}
            onChange={setFilterCategory}
            options={[
              { value: 'All', label: 'All' },
              { value: 'Sightseeing', label: 'Sightseeing' },
              { value: 'Historical', label: 'Historical' },
              { value: 'Relaxation', label: 'Relaxation' },
            ]}
          />
          <Button type="dashed" onClick={() => setFilterCategory('All')}>
            Clear Filter
          </Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={openAddStop}>
            Add New Stop
          </Button>
        </Space>

        {/* Drag and drop stops list */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="stops-list">
            {(provided: any) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredStops.length === 0 && (
                  <Empty
                    description={
                      filterCategory === 'All'
                        ? "No stops yet. Add a new stop to get started!"
                        : `No stops in category "${filterCategory}"`
                    }
                  />
                )}
                {filteredStops.map((stop, index) => (
                  <Draggable key={stop.id} draggableId={stop.id} index={index}>
                    {(provided: any, snapshot: any) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          marginBottom: 16,
                          background: snapshot.isDragging ? '#e6f7ff' : 'white',
                          ...provided.draggableProps.style,
                          borderRadius: 10,
                          boxShadow: snapshot.isDragging
                            ? '0 4px 12px rgba(24, 144, 255, 0.2)'
                            : undefined,
                        }}
                      >
                        <Row gutter={16}>
                          <Col span={12}>
                            <Title level={4} style={{ marginBottom: 6 }}>
                              {stop.name}
                            </Title>
                            <Tag color="geekblue">{stop.category}</Tag>
                            <Text type="secondary" style={{ display: 'block', marginTop: 6 }}>
                              {stop.description}
                            </Text>
                          </Col>
                          <Col span={12}>
                            {stop.images.length > 0 && (
                              <Swiper
                                spaceBetween={8}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                style={{ borderRadius: 10, overflow: 'hidden' }}
                              >
                                {stop.images.map((url, i) => (
                                  <SwiperSlide key={i}>
                                    <img
                                      src={url}
                                      alt={`${stop.name} image ${i + 1}`}
                                      style={{
                                        width: '100%',
                                        height: 140,
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                      }}
                                      loading="lazy"
                                    />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            )}
                          </Col>
                        </Row>

                        <Space style={{ marginTop: 12, float: 'right' }}>
                          <Button size="small" onClick={() => openEditStop(stop)}>
                            Edit
                          </Button>
                          <Button
                            size="small"
                            danger
                            onClick={() => deleteStop(stop.id)}
                            type="primary"
                          >
                            Delete
                          </Button>
                        </Space>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Form for add/edit stop */}
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          style={{ marginTop: 40 }}
          scrollToFirstError
        >
          <Title level={4}>{isEditing ? 'Edit Stop Details' : 'Add New Stop'}</Title>
          <Form.Item
            name="name"
            label="Stop Name"
            rules={[{ required: true, message: 'Please enter the stop name' }]}
          >
            <Input placeholder="E.g., Paris - Eiffel Tower" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select a category' }]}
          >
            <Select placeholder="Select category">
              <Option value="Sightseeing">Sightseeing</Option>
              <Option value="Historical">Historical</Option>
              <Option value="Relaxation">Relaxation</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please add a description' }]}
          >
            <Input.TextArea rows={3} placeholder="Describe this stop..." />
          </Form.Item>
          <Form.Item
            name="images"
            label="Images URLs (comma separated)"
            rules={[{ required: false }]}
          >
            <Input placeholder="Paste image URLs separated by commas" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
