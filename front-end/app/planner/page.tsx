"use client"
import { useState } from 'react';
import type { NextPage } from 'next';
import {
  Layout,
  Menu,
  Tabs,
  Form,
  Input,
  Button,
  List,
  Checkbox,
  Timeline,
  Statistic,
  Row,
  Col,
  Card,
  Select,
  Badge,
  DatePicker,
} from 'antd';
import {
  MapPin,
  Calendar as CalIcon,
  DollarSign,
  Box,
  List as ListIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const { Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;

interface City { title: string; lat: number; lon: number; }
const cities: City[] = [
  { title: 'Paris', lat: 48.8566, lon: 2.3522 },
  { title: 'NYC', lat: 40.7128, lon: -74.006 },
  { title: 'Tokyo', lat: 35.6895, lon: 139.6917 },
];

const Home: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dates, setDates] = useState<[any, any]>([null, null]);
  const [itinerary, setItinerary] = useState<Record<string, string[]>>({});
  const [item, setItem] = useState('');
  const [packing, setPacking] = useState<{ label: string; done: boolean }[]>([]);
  const [budget, setBudget] = useState(0);
  const [activeCity, setActiveCity] = useState<City>(cities[0]);

  const addItinerary = () => {
    if (!item || !dates[0]) return;
    const day = dates[0].format('YYYY-MM-DD');
    const dayList = itinerary[day] || [];
    setItinerary({ ...itinerary, [day]: [...dayList, item] });
    setItem('');
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="md"
        collapsedWidth={collapsed ? 0 : 80}
        className="bg-gradient-to-b from-blue-800 to-blue-600 fixed h-full"
      >
        <motion.div
          className="text-white text-center p-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {!collapsed && <span className="text-xl font-bold">TripPlanner</span>}
        </motion.div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {[
            { key: '1', icon: <CalIcon size={20} />, label: 'Schedule' },
            { key: '2', icon: <DollarSign size={20} />, label: 'Budget' },
            { key: '3', icon: <Box size={20} />, label: 'Packing' },
            { key: '4', icon: <MapPin size={20} />, label: 'Map' },
          ].map((m) => (
            <Menu.Item key={m.key} icon={m.icon} className="text-lg">
              {m.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout className="ml-0 md:ml-80 transition-all">
        <Content className="p-4 md:p-8 bg-gray-50">
          <Card className="shadow-lg rounded-lg">
            <Tabs defaultActiveKey="1" tabBarGutter={24} className="overflow-auto">
              <TabPane
                tab={
                  <span><CalIcon size={18} /> Schedule</span>
                }
                key="1"
              >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={8} lg={6}>
                      <RangePicker
                        format="YYYY-MM-DD"
                        onChange={(vals) => setDates(vals as [any, any])}
                        className="w-full mb-4"
                      />
                      <Form layout="inline" className="mb-4">
                        <Form.Item>
                          <Input
                            placeholder="Activity"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            className="w-48"
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            type="primary"
                            icon={<ListIcon size={16} />}
                            onClick={addItinerary}
                          >
                            Add
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                    <Col xs={24} md={16} lg={18}>
                      {dates[0] ? (
                        Object.keys(itinerary).map((day) => (
                          <Card
                            key={day}
                            title={day}
                            className="mb-4"
                            size="small"
                          >
                            <Timeline>
                              {itinerary[day].map((act, i) => (
                                <Timeline.Item key={i}>{act}</Timeline.Item>
                              ))}
                            </Timeline>
                          </Card>
                        ))
                      ) : (
                        <div className="text-center text-gray-500">
                          Select check‑in/check‑out to see daily timeline
                        </div>
                      )}
                    </Col>
                  </Row>
                </motion.div>
              </TabPane>

              <TabPane tab={<span><DollarSign size={18} /> Budget</span>} key="2">
                <Row gutter={16} className="text-center">
                  <Col xs={24} sm={12} lg={8}>
                    <Statistic title="Spent" value={budget} prefix="$" />
                  </Col>
                  <Col xs={24} sm={12} lg={8}>
                    <Button block onClick={() => setBudget((b) => b + 50)}>
                      +$50
                    </Button>
                  </Col>
                  <Col xs={24} sm={12} lg={8}>
                    <Button
                      block
                      danger
                      onClick={() => setBudget((b) => Math.max(0, b - 50))}
                    >
                      -$50
                    </Button>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab={<span><Box size={18} /> Packing</span>} key="3">
                <Row className="pb-4">
                  <Col xs={24} md={12} lg={8}>
                    <List
                      bordered
                      dataSource={packing}
                      renderItem={(p, i) => (
                        <List.Item>
                          <Checkbox
                            checked={p.done}
                            onChange={() => {
                              const arr = [...packing];
                              arr[i].done = !arr[i].done;
                              setPacking(arr);
                            }}
                          />
                          <span
                            className={`ml-2 ${
                              p.done ? 'line-through text-gray-400' : ''
                            }`}
                          >
                            {p.label}
                          </span>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
                <Button
                  type="dashed"
                  block
                  onClick={() =>
                    setPacking((prev) => [...prev, { label: 'New Item', done: false }])
                  }
                >
                  Add Item
                </Button>
              </TabPane>

              <TabPane tab={<span><MapPin size={18} /> Map</span>} key="4">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={8} lg={6}>
                    <Select
                      defaultValue={activeCity.title}
                      onChange={(val) => {
                        const city = cities.find((c) => c.title === val)!;
                        setActiveCity(city);
                      }}
                      className="w-full"
                    >
                      {cities.map((c) => (
                        <Option key={c.title} value={c.title}>
                          {c.title}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col xs={24} md={16} lg={18}>
                    <iframe
                      className="w-full h-64 md:h-96 rounded-lg shadow"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://maps.google.com/maps?q=${activeCity.lat},${activeCity.lon}&z=6&hl=en&output=embed`}
                      title={`Map of ${activeCity.title}`}
                    />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
