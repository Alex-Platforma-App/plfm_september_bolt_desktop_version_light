import React, { useState } from 'react';
import { Package, Plus, Edit, Trash2, Euro, TrendingUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const SupplierCatalog: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const catalogProducts = [
    {
      id: '1',
      name: 'N95 Medical Masks',
      category: 'Medical Supplies',
      stock: 2500,
      price: 0.85,
      status: 'In Stock',
      requests: 234,
      description: 'CE certified N95 respirator masks for medical personnel'
    },
    {
      id: '2',
      name: 'Emergency Thermal Blankets',
      category: 'Emergency Supplies',
      stock: 850,
      price: 4.50,
      status: 'In Stock',
      requests: 189,
      description: 'Reflective emergency blankets for cold weather protection'
    },
    {
      id: '3',
      name: 'Water Purification Tablets',
      category: 'Water & Sanitation',
      stock: 120,
      price: 0.12,
      status: 'Low Stock',
      requests: 167,
      description: 'Chlorine dioxide tablets for water disinfection'
    },
    {
      id: '4',
      name: 'Portable Solar Chargers',
      category: 'Electronics',
      stock: 45,
      price: 45.00,
      status: 'In Stock',
      requests: 123,
      description: '20W portable solar panels for device charging'
    },
    {
      id: '5',
      name: 'First Aid Kits',
      category: 'Medical Supplies',
      stock: 0,
      price: 12.50,
      status: 'Out of Stock',
      requests: 145,
      description: 'Complete first aid kits for emergency response'
    }
  ];

  const filteredProducts = catalogProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Out of Stock':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Catalog
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage your product catalog and inventory
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-4 pr-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {product.name}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {product.description}
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <Package className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      Stock: {product.stock}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Euro className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                      €{product.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      {product.requests} requests
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
          </div>
        ))}
      </div>
    </div>
  );
};