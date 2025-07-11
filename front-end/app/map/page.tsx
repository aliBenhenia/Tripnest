'use client';

import React, { useState } from 'react';
import OpenLayerMap from '@/components/OpenLayerMap';
import {
  Layout,
  Typography,
  Menu,
  Card,
  List,
  Switch,
  Divider,
  Input,
  Row,
  Col,
  Select,
  Slider,
  Button,
} from 'antd';
import {
  EnvironmentOutlined,
  FireOutlined,
  SmileOutlined,
  StarOutlined,
  SearchOutlined,
  FilterOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const activitiesMock = [
  { id: 1, title: 'Eiffel Tower Tour', price: 35, category: 'Popular' },
  { id: 2, title: 'Louvre Museum Visit', price: 25, category: 'Family' },
  { id: 3, title: 'Seine River Cruise', price: 40, category: 'Adventure' },
  { id: 4, title: 'Montmartre Walk', price: 20, category: 'Outdoor' },
  { id: 5, title: 'Notre-Dame Cathedral', price: 30, category: 'Popular' },
  { id: 6, title: 'Versailles Palace', price: 45, category: 'Adventure' },
];

export default function MapPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredActivities = activitiesMock.filter((act) => {
    const inPriceRange = act.price >= priceRange[0] && act.price <= priceRange[1];
    const matchesCategory = !category || act.category === category;
    const matchesSearch = act.title.toLowerCase().includes(searchTerm.toLowerCase());
    return inPriceRange && matchesCategory && matchesSearch;
  });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Search Header */}
      <Header
        style={{
          background: '#fff',
          padding: '12px 24px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
          zIndex: 100,
        }}
      >
        <Search
          placeholder="Search activities, hotels, locations..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={(value) => setSearchTerm(value)}
          style={{ maxWidth: 600, margin: '0 auto', display: 'block' }}
        />
      </Header>

      <Layout>
        {/* Filters Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={280}
          style={{
            background: '#fff',
            paddingTop: 24,
            borderRight: '1px solid #f0f0f0',
          }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Title level={4} style={{ paddingLeft: 16 }}>
            Filters
          </Title>

          <div style={{ padding: 16 }}>
            <Text strong>Category</Text>
            <Select
              style={{ width: '100%', marginBottom: 16 }}
              placeholder="Choose category"
              onChange={(val) => setCategory(val)}
              allowClear
            >
              <Option value="Outdoor">Outdoor</Option>
              <Option value="Adventure">Adventure</Option>
              <Option value="Family">Family</Option>
              <Option value="Popular">Popular</Option>
            </Select>

            <Text strong>Price Range</Text>
            <Slider
              range
              max={100}
              step={5}
              value={priceRange}
              onChange={(val) => setPriceRange(val as [number, number])}
              style={{ marginBottom: 16 }}
            />

            <Button
              icon={<ReloadOutlined />}
              block
              onClick={() => {
                // setCategory(undefined);
                // setPriceRange([0, 50]);
                // setSearchTerm('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        </Sider>

        {/* Main Content */}
        <Content
          style={{
            padding: 24,
            background: '#fafafa',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 64px)',
            }}
          >
            {/* Map */}
            <div
              style={{
                flex: 1,
                marginBottom: 24,
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <OpenLayerMap />
            </div>

            {/* Activities */}
            <div style={{ flexShrink: 0 }}>
              <Title level={4}>Available Activities</Title>
              <Row gutter={[16, 16]}>
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((act) => (
                    <Col key={act.id} xs={24} sm={12} md={8} lg={6}>
                      <Card
                        hoverable
                        title={act.title}
                        extra={<a href="#">Book</a>}
                        style={{ borderRadius: 8 }}
                      >
                        <Text strong>Price:</Text> ${act.price}
                        <br />
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          Category: {act.category}
                        </Text>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Text type="secondary">No activities found.</Text>
                )}
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
