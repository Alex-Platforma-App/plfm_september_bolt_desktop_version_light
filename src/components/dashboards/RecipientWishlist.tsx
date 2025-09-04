import React, { useState } from 'react';
import { Plus, Heart, Package, AlertTriangle, Edit, Trash2, Calendar } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const RecipientWishlist: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const wishlistItems = [
    {
      id: '1',
      name: 'N95 Medical Masks',
      category: 'Medical',
      quantity: 500,
      priority: 'High',
      description: 'Essential protective equipment for medical staff',
      dateAdded: '2024-01-15',
      fulfilled: 0,
      status: 'Needed'
    },
    {
      id: '2',
      name: 'Thermal Blankets',
      category: 'Emergency',
      quantity: 100,
      priority: 'High',
      description: 'Emergency blankets for cold weather protection',
      dateAdded: '2024-01-12',
      fulfilled: 45,
      status: 'Partially Fulfilled'
    },
    {
      id: '3',
      name: 'First Aid Kits',
      category: 'Medical',
      quantity: 25,
      priority: 'Medium',
      description: 'Complete first aid kits for emergency response',
      dateAdded: '2024-01-10',
      fulfilled: 25,
      status: 'Fulfilled'
    },
    {
      id: '4',
      name: 'Portable Generators',
      category: 'Electronics',
      quantity: 3,
      priority: 'High',
      description: 'Backup power generators for critical operations',
      dateAdded: '2024-01-08',
      fulfilled: 1,
      status: 'Partially Fulfilled'
    },
    {
      id: '5',
      name: 'Water Purification Tablets',
      category: 'Water & Sanitation',
      quantity: 1000,
      priority: 'Medium',
      description: 'Water treatment tablets for safe drinking water',
      dateAdded: '2024-01-05',
      fulfilled: 0,
      status: 'Needed'
    },
    {
      id: '6',
      name: 'Educational Materials',
      category: 'Education',
      quantity: 50,
      priority: 'Low',
      description: 'School supplies for displaced children',
      dateAdded: '2024-01-03',
      fulfilled: 30,
      status: 'Partially Fulfilled'
    }
  ];

  const categories = ['all', 'Medical', 'Emergency', 'Electronics', 'Water & Sanitation', 'Education'];

  const filteredItems = wishlistItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Partially Fulfilled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Needed':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const totalItems = wishlistItems.length;
  const fulfilledItems = wishlistItems.filter(item => item.status === 'Fulfilled').length;
  const fulfillmentRate = Math.round((fulfilledItems / totalItems) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Wishlist
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage your priority needs and track fulfillment status
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Summary Card */}
      <div 
        style={gradientStyle}
        className={`rounded-xl p-6 border ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Wishlist Summary
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              {totalItems} total items • {fulfilledItems} fulfilled
            </p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              {fulfillmentRate}%
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Fulfillment Rate
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Filter by category:
        </span>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-600 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Wishlist Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const fulfillmentPercentage = (item.fulfilled / item.quantity) * 100;
          
          return (
            <div 
              key={item.id}
              style={gradientStyle}
              className={`rounded-xl p-6 border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(item.priority)}`}>
                      {item.priority} Priority
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Package className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        {item.quantity} needed
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                        Added {item.dateAdded}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                    <Edit className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  </button>
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                    <Trash2 className={`w-4 h-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`} />
                  </button>
                </div>
              </div>

              {/* Fulfillment Progress */}
              {item.fulfilled > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Fulfillment Progress
                    </span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      {item.fulfilled} / {item.quantity}
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2`}>
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(fulfillmentPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};