import React, { useState } from 'react';
import { Search, Filter, Package, DollarSign, Check, X, Clock, MapPin, CheckCircle, Heart, Share2, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AllCatalogs: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const cardStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const organizations = [
    {
      id: '1',
      name: 'Kyiv Emergency Response Foundation',
      description: 'Medical supplies catalog with emergency response equipment and pharmaceuticals',
      category: 'Medical',
      location: 'Kyiv',
      verified: true,
      itemCount: 1247,
      lastUpdated: '2 hours ago',
      followers: 234,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'MedSupply Ukraine',
      description: 'Pharmaceutical and medical equipment supplier with comprehensive inventory',
      category: 'Medical',
      location: 'Lviv',
      verified: true,
      itemCount: 892,
      lastUpdated: '4 hours ago',
      followers: 189,
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Lviv Medical Aid Network',
      description: 'Emergency medical kits and first aid supplies for humanitarian operations',
      category: 'Medical',
      location: 'Lviv',
      verified: true,
      itemCount: 567,
      lastUpdated: '1 day ago',
      followers: 156,
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '4',
      name: 'Winter Gear Solutions',
      description: 'Clothing and thermal supplies for cold weather protection and emergency shelter',
      category: 'Clothing',
      location: 'Kharkiv',
      verified: true,
      itemCount: 734,
      lastUpdated: '6 hours ago',
      followers: 201,
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '5',
      name: 'Kharkiv Children\'s Relief',
      description: 'Educational materials and toys for displaced children and learning support',
      category: 'Education',
      location: 'Kharkiv',
      verified: true,
      itemCount: 423,
      lastUpdated: '3 hours ago',
      followers: 178,
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '6',
      name: 'Essential Supplies Co',
      description: 'Food packages and hygiene kits for emergency distribution and relief efforts',
      category: 'Food & Hygiene',
      location: 'Odesa',
      verified: true,
      itemCount: 1089,
      lastUpdated: '5 hours ago',
      followers: 267,
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '7',
      name: 'Odesa Community Support',
      description: 'Mixed humanitarian supplies including shelter materials and emergency equipment',
      category: 'Emergency',
      location: 'Odesa',
      verified: true,
      itemCount: 645,
      lastUpdated: '8 hours ago',
      followers: 143,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '8',
      name: 'Humanitarian Logistics Ltd',
      description: 'Transportation services and logistics coordination for aid delivery operations',
      category: 'Logistics',
      location: 'Dnipro',
      verified: true,
      itemCount: 234,
      lastUpdated: '12 hours ago',
      followers: 98,
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const categories = ['all', 'Medical', 'Clothing', 'Education', 'Food & Hygiene', 'Emergency', 'Logistics'];
  const locations = ['all', 'Kyiv', 'Lviv', 'Kharkiv', 'Odesa', 'Dnipro', 'Poltava'];

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || org.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || org.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

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
          Browse available supplies and equipment from verified organizations
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

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-600 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location === 'all' ? 'All Locations' : location}
            </option>
          ))}
        </select>
      </div>

      {/* Organization Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredOrganizations.map((org) => (
          <div 
            key={org.id} 
            style={cardStyle}
            className={`rounded-xl p-6 border ${
            theme === 'dark'
              ? 'border-slate-700'
              : 'border-gray-200'
          } hover:shadow-lg transition-shadow cursor-pointer`}>
            
            {/* Organization Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={org.image} 
                  alt={org.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {org.name}
                    </h3>
                    {org.verified && (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className={`w-3 h-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                    }`} />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                    }`}>
                      {org.location}
                    </span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark'
                  ? 'bg-blue-900/30 text-blue-400'
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {org.category}
              </span>
            </div>

            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {org.description}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Package className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    {org.itemCount} items
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-red-400' : 'text-red-500'
                  }`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    {org.followers}
                  </span>
                </div>
              </div>
              <span className={`text-xs ${
                theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
              }`}>
                Updated {org.lastUpdated}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}>
                <div className="flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Catalog</span>
                </div>
              </button>
              <button className={`px-3 py-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Heart className="w-4 h-4" />
              </button>
              <button className={`px-3 py-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};