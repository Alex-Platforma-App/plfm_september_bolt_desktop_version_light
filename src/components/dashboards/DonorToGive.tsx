import React, { useState } from 'react';
import { Plus, Package, Calendar, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const DonorToGive: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const [selectedCategory, setSelectedCategory] = useState('all');

  const toGiveItems = [
    {
      id: '1',
      name: 'Medical Equipment Donation',
      category: 'Medical',
      quantity: '50 units',
      estimatedValue: 2500,
      targetOrganization: 'Kharkiv Regional Hospital',
      location: 'Kharkiv Oblast',
      scheduledDate: '2024-01-25',
      status: 'Scheduled',
      description: 'Portable defibrillators and monitoring equipment'
    },
    {
      id: '2',
      name: 'Winter Clothing Collection',
      category: 'Clothing',
      quantity: '200 items',
      estimatedValue: 1200,
      targetOrganization: 'Caritas Ukraine',
      location: 'Lviv Oblast',
      scheduledDate: '2024-01-30',
      status: 'Preparing',
      description: 'Winter jackets, thermal underwear, and warm accessories'
    },
    {
      id: '3',
      name: 'Educational Supplies',
      category: 'Education',
      quantity: '100 sets',
      estimatedValue: 800,
      targetOrganization: 'Save the Children Ukraine',
      location: 'Dnipro Oblast',
      scheduledDate: '2024-02-05',
      status: 'Planned',
      description: 'School supplies and learning materials for displaced children'
    },
    {
      id: '4',
      name: 'Emergency Food Packages',
      category: 'Food',
      quantity: '75 packages',
      estimatedValue: 950,
      targetOrganization: 'World Food Programme Ukraine',
      location: 'Zaporizhzhia Oblast',
      scheduledDate: '2024-02-10',
      status: 'Planned',
      description: 'Non-perishable food items and nutritional supplements'
    }
  ];

  const categories = ['all', 'Medical', 'Clothing', 'Education', 'Food', 'Emergency'];

  const filteredItems = toGiveItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Preparing':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Planned':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const totalValue = toGiveItems.reduce((sum, item) => sum + item.estimatedValue, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            To Give
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Planned donations and items ready to contribute
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Item to Give</span>
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
              Planned Contributions
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              {toGiveItems.length} items scheduled for donation
            </p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              €{totalValue.toLocaleString()}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Estimated Value
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

      {/* To Give Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
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
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
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
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className={`w-4 h-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                      {item.targetOrganization}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      {item.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      {item.scheduledDate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  €{item.estimatedValue.toLocaleString()}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Estimated Value
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};