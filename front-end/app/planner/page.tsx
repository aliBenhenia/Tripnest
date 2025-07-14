"use client";
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
  MoreVertical,
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
    <Layout className="min-h-screen bg-gray-100">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={240}
        className="bg-white border-r"
        breakpoint="lg"
        collapsedWidth={80}
      >
        <motion.div
          className="flex items-center justify-between px-4 py-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {!collapsed && <h2 className="text-xl font-semibold">TripPlanner</h2>}
          {collapsed && <MoreVertical size={24} />}
        </motion.div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="border-none px-2"
        >
          {[
            { key: '1', icon: <CalIcon size={20} />, label: 'Schedule' },
            { key: '2', icon: <DollarSign size={20} />, label: 'Budget' },
            { key: '3', icon: <Box size={20} />, label: 'Packing' },
            { key: '4', icon: <MapPin size={20} />, label: 'Map' },
          ].map((m) => (
            <Menu.Item
              key={m.key}
              icon={m.icon}
              className="py-4 text-base hover:bg-gray-100"
            >
              {m.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout className="ml-0 lg:ml-60 transition-all duration-300">
        <Content className="p-6 lg:p-10">
          <Card className="shadow-md rounded-lg bg-white">
            <Tabs
              defaultActiveKey="1"
              tabBarGutter={32}
              className="overflow-auto px-4 py-2"
            >
              <TabPane
                tab={
                  <span className="flex items-center">
                    <CalIcon size={18} className="mr-1" />
                    Schedule
                  </span>
                }
                key="1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <RangePicker
                        format="YYYY-MM-DD"
                        onChange={(vals) => setDates(vals as [any, any])}
                        className="w-full mb-4"
                        placeholder={['Check-in', 'Check-out']}
                      />
                      <Form layout="inline" className="mb-4">
                        <Form.Item>
                          <Input
                            placeholder="New activity"
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
                    <Col xs={24} sm={24} md={16} lg={18}>
                      {dates[0] ? (
                        Object.keys(itinerary).map((day) => (
                          <Card
                            key={day}
                            title={day}
                            className="mb-6"
                            bordered={false}
                          >
                            <Timeline
                              mode="left"
                              className="ml-4"
                            >
                              {itinerary[day].map((act, i) => (
                                <Timeline.Item key={i}>{act}</Timeline.Item>
                              ))}
                            </Timeline>
                          </Card>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 py-20">
                          Select check‑in/check‑out to view your schedule by day
                        </div>
                      )}
                    </Col>
                  </Row>
                </motion.div>
              </TabPane>

              <TabPane
                tab={
                  <span className="flex items-center">
                    <DollarSign size={18} className="mr-1" />
                    Budget
                  </span>
                }
                key="2"
              >
                <Row gutter={[24, 24]} className="text-center py-4">
                  <Col xs={24} sm={8}>
                    <Statistic title="Total Spent" value={budget} prefix="$" />
                  </Col>
                  <Col xs={24} sm={8}>
                    <Button
                      block
                      className="py-4"
                      onClick={() => setBudget((b) => b + 100)}
                    >
                      +$100
                    </Button>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Button
                      block
                      danger
                      className="py-4"
                      onClick={() => setBudget((b) => Math.max(0, b - 100))}
                    >
                      -$100
                    </Button>
                  </Col>
                </Row>
              </TabPane>

              <TabPane
                tab={
                  <span className="flex items-center">
                    <Box size={18} className="mr-1" />
                    Packing
                  </span>
                }
                key="3"
              >
                <Row gutter={16} className="py-4">
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
                            className={`ml-2 text-base $
                              p.done ? 'line-through text-gray-400' : ''
                            }`}
                          >
                            {p.label}
                          </span>
                        </List.Item>
                      )}
                    />
                    <Button
                      type="dashed"
                      block
                      className="mt-4"
                      onClick={() =>
                        setPacking((prev) => [...prev, { label: 'New Item', done: false }])
                      }
                    >
                      Add Item
                    </Button>
                  </Col>
                </Row>
              </TabPane>

              <TabPane
                tab={
                  <span className="flex items-center">
                    <MapPin size={18} className="mr-1" />
                    Map
                  </span>
                }
                key="4"
              >
                <Row gutter={[24, 24]} className="py-4">
                  <Col xs={24} sm={8} md={6} lg={4}>
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
                  <Col xs={24} sm={16} md={18} lg={20}>
                    <iframe
                      className="w-full h-80 md:h-[500px] rounded-lg shadow-lg"
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
