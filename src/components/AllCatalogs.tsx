import React, { useState } from 'react';
import { Search, Filter, Package, DollarSign, Check, X, Clock, MapPin } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { catalogItems } from '../../data/mockData';

export const AllCatalogs: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cardStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const categories = ['all', 'Medical', 'Emergency', 'Water & Sanitation', 'Electronics', 'Food', 'Shelter'];

  const filteredItems = catalogItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'in-stock':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'limited':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'out-of-stock':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          All Catalogs
        </h2>
        <p className={`${
          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
        }`}>
          Browse available supplies and equipment from verified suppliers
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-400'
          }`} />
          <input
            type="text"
            placeholder="Search catalogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
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

      {/* Catalog Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            style={cardStyle}
            className={`rounded-xl p-6 border ${
            theme === 'dark'
              ? 'border-slate-700'
              : 'border-gray-200'
          } hover:shadow-lg transition-shadow cursor-pointer`}>
            {/* Product Image */}
            {item.image && (
              <div className="mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            )}
            
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.name}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  by {item.supplier}
                </p>
                {item.location && (
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className={`w-3 h-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                    }`} />
                    <span className={`text-xs ${
                      theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                    }`}>
                      {item.location}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1">
                {getAvailabilityIcon(item.availability)}
                <span className={`text-xs font-medium capitalize ${
                  item.availability === 'in-stock' ? 'text-green-500' :
                  item.availability === 'limited' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {item.availability.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <span className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark'
                  ? 'bg-blue-900/30 text-blue-400'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {item.category}
              </span>
              {item.price && (
                <div className="flex items-center space-x-1">
                  <DollarSign className={`w-3 h-3 ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-green-400' : 'text-green-600'
                  }`}>
                    {item.price}
                  </span>
                </div>
              )}
            </div>

            <p className={`text-sm ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {item.description}
            </p>

            {/* Additional Information */}
            <div className="space-y-2 mb-4">
              {item.stock && (
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Stock:
                  </span>
                  <span className={`text-xs font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.stock}
                  </span>
                </div>
              )}
              {item.nonprofit && (
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Partner Nonprofit:
                  </span>
                  <span className={`text-xs font-medium ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {item.nonprofit}
                  </span>
                </div>
              )}
            </div>
            <button className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};