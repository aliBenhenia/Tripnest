// pages/saved.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  HeartFilled, 
  HeartOutlined, 
  DeleteOutlined, 
  EditOutlined,
  CalendarOutlined,
  SearchOutlined,
  FilterOutlined
} from '@ant-design/icons';
import { 
  Button, 
  Card, 
  Row, 
  Col, 
  Space, 
  Input, 
  Select, 
  Empty, 
  Spin, 
  message,
  Modal,
  Typography,
  Badge
} from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import notify from '@/lib/notify';

const { Title, Text } = Typography;

const SavedPage = () => {
  const router = useRouter();
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = () => {
      const storedToken = localStorage.getItem('TOKEN_KEY');
      setToken(storedToken);
      if (!storedToken) {
        router.push('/login');
      }
    };

    fetchToken();
  }, [router]);

  useEffect(() => {
    if (token) {
      fetchSavedItems();
    }
  }, [token]);

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Fetches the saved items for the authenticated user.
 * Utilizes the user's token for authorization to make a GET request 
 * to the saved items API endpoint. Updates the savedItems state 
 * with the data received from the server. Handles errors by logging 
 * them to the console and displaying an error message. 
 * Sets the loading state to true while the request is in progress 
 * and false once completed.
 */

/*******  47aacdb1-edc5-4314-9162-3f88541df116  *******/
  const fetchSavedItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/saves`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSavedItems(response.data);
    } catch (error) {
      console.error('Error fetching saved items:', error);
      message.error('Failed to fetch saved items');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/api/saves/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSavedItems(savedItems.filter(item => item._id !== itemId));
      message.success('Item removed from favorites');
    } catch (error) {
      console.error('Error deleting item:', error);
      message.error('Failed to remove item');
    }
  };

  const filteredItems = savedItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type) => {
    switch (type) {
      case 'attraction': return 'blue';
      case 'restaurant': return 'green';
      case 'hotel': return 'purple';
      case 'activity': return 'orange';
      default: return 'default';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'attraction': return '🏛️';
      case 'restaurant': return '🍽️';
      case 'hotel': return '🏨';
      case 'activity': return '🎪';
      default: return '📍';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Title level={2} className="text-gray-800 mb-2">
            My Saved Items
          </Title>
          <Text type="secondary" className="text-lg">
            {savedItems.length} items saved
          </Text>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 min-w-64">
                <Input
                  placeholder="Search saved items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  prefix={<SearchOutlined className="text-gray-400" />}
                  className="rounded-lg"
                />
              </div>
              <Select
                value={filterType}
                onChange={setFilterType}
                className="w-full sm:w-48 rounded-lg"
                suffixIcon={<FilterOutlined className="text-gray-400" />}
              >
                <Select.Option value="all">All Types</Select.Option>
                <Select.Option value="attraction">Attractions</Select.Option>
                <Select.Option value="restaurant">Restaurants</Select.Option>
                <Select.Option value="hotel">Hotels</Select.Option>
                <Select.Option value="activity">Activities</Select.Option>
              </Select>
            </div>
            <Button
              type="primary"
              onClick={() => router.push('/')}
              className="bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Back to Explore
            </Button>
          </div>
        </motion.div>

        {/* Items Grid */}
        <AnimatePresence>
          {filteredItems.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                >
                  <Card
                    hoverable
                    className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    cover={
                      item.imageUrl ? (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-4xl">📷</span>
                        </div>
                      )
                    }
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{getTypeIcon(item.type)}</span>
                          <Title level={4} className="m-0 text-gray-800">
                            {item.name}
                          </Title>
                        </div>
                        <Badge 
                          color={getTypeColor(item.type)} 
                          text={item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          className="text-xs"
                        />
                      </div>
                      <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={(e) => {
                          e.stopPropagation();
                          setItemToDelete(item);
                          setDeleteModalVisible(true);
                        }}
                        className="text-red-500 hover:text-red-700"
                      />
                    </div>
                    
                    <Text type="secondary" className="block mb-3 line-clamp-2">
                      {item.description}
                    </Text>
                    
                    <div className="flex justify-between items-center mt-4">
                      <Space>
                        {item.latitude && item.longitude && (
                          <span className="text-sm text-gray-500">
                            📍 {item.latitude.toFixed(4)}, {item.longitude.toFixed(4)}
                          </span>
                        )}
                      </Space>
                      <Button
                        type="primary"
                        icon={<CalendarOutlined />}
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          notify({
                            type: 'info',
                            message: '📅 Planning feature coming soon!',
                          });
                        }}
                      >
                        Plan Visit
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <div>
                    <Title level={4} className="text-gray-600 mb-2">
                      No saved items yet
                    </Title>
                    <Text type="secondary">
                      Start exploring and save your favorite places!
                    </Text>
                  </div>
                }
              />
              <Button
                type="primary"
                onClick={() => router.push('/')}
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Explore Places
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <Modal
          title="Remove from Favorites"
          open={deleteModalVisible}
          onCancel={() => setDeleteModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => setDeleteModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="delete"
              type="primary"
              danger
              onClick={() => {
                if (itemToDelete) {
                  handleDeleteItem(itemToDelete._id);
                  setDeleteModalVisible(false);
                  setItemToDelete(null);
                }
              }}
            >
              Remove
            </Button>,
          ]}
        >
          <p>Are you sure you want to remove "{itemToDelete?.name}" from your favorites?</p>
        </Modal>
      </div>
    </div>
  );
};

export default SavedPage;