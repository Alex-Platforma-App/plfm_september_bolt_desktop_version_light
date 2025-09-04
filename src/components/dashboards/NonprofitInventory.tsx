import React, { useState } from 'react';
import { Package, Plus, TrendingUp, AlertTriangle, Edit, Trash2, MoreHorizontal } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const NonprofitInventory: React.FC = () => {
  const { theme } = useTheme();
  const [activeView, setActiveView] = useState('overview'); // 'overview' or 'catalog'

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const catalogItems = [
    {
      id: '1',
      name: 'Thermal Blanket',
      description: 'The RescUe Med emergency blanket can be used in a variety of situations and...',
      warehouse: 'Pechersk',
      stock: 34,
      visibility: 'Public',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg'
    },
    {
      id: '2',
      name: 'Elastic Bandage',
      description: 'High-quality elastic bandage for sprains, strains, and joint support. Provides...',
      warehouse: 'Central',
      stock: 67,
      visibility: 'Public',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
    },
    {
      id: '3',
      name: 'Sterile Gauze Pads',
      description: 'Sterile gauze pads for wound dressing and absorption. Non-adherent...',
      warehouse: 'North',
      stock: 89,
      visibility: 'Public',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
    },
    {
      id: '4',
      name: 'Medical Scissors',
      description: 'Stainless steel medical scissors with blunt tips for safe cutting of bandages...',
      warehouse: 'Central',
      stock: 23,
      visibility: 'Public',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
    }
  ];

  const inventoryItems = [
    {
      id: '1',
      name: 'N95 Medical Masks',
      category: 'Medical',
      currentStock: 1250,
      minThreshold: 500,
      maxCapacity: 2000,
      status: 'In Stock',
      lastRestocked: '2024-01-15',
      supplier: 'MedSupply Europe'
    },
    {
      id: '2',
      name: 'Emergency Food Packages',
      category: 'Food',
      currentStock: 89,
      minThreshold: 100,
      maxCapacity: 500,
      status: 'Low Stock',
      lastRestocked: '2024-01-12',
      supplier: 'Food Aid International'
    },
    {
      id: '3',
      name: 'Thermal Blankets',
      category: 'Shelter',
      currentStock: 345,
      minThreshold: 200,
      maxCapacity: 800,
      status: 'In Stock',
      lastRestocked: '2024-01-10',
      supplier: 'Emergency Supplies Co'
    },
    {
      id: '4',
      name: 'Water Purification Tablets',
      category: 'Water & Sanitation',
      currentStock: 2500,
      minThreshold: 1000,
      maxCapacity: 5000,
      status: 'In Stock',
      lastRestocked: '2024-01-08',
      supplier: 'WaterTech Solutions'
    },
    {
      id: '5',
      name: 'First Aid Kits',
      category: 'Medical',
      currentStock: 45,
      minThreshold: 50,
      maxCapacity: 200,
      status: 'Critical',
      lastRestocked: '2024-01-05',
      supplier: 'MedSupply Europe'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Critical':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const totalItems = inventoryItems.reduce((sum, item) => sum + item.currentStock, 0);
  const lowStockItems = inventoryItems.filter(item => item.currentStock <= item.minThreshold).length;
  const publicItems = catalogItems.length;
  const totalAvailable = catalogItems.reduce((sum, item) => sum + item.stock, 0);
  const warehouses = [...new Set(catalogItems.map(item => item.warehouse))].length;

  if (activeView === 'catalog') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <button 
              onClick={() => setActiveView('overview')}
              className={`text-sm ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
            >
              ← Back to My Inventory
            </button>
            <h2 className={`text-2xl font-bold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              My Catalog ({catalogItems.length})
            </h2>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Manage your organization's resources
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-3 gap-6">
          {catalogItems.map((item) => (
            <div 
              key={item.id}
              style={gradientStyle}
              className={`rounded-xl p-6 border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              } hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <button className={`p-1 rounded ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                  <MoreHorizontal className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                </button>
              </div>

              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {item.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {item.visibility}
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  Warehouse {item.warehouse}
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                  In stock: {item.stock}
                </span>
              </div>

              <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border text-center ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {publicItems}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Public Items
            </div>
          </div>

          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border text-center ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className={`text-3xl font-bold text-green-500`}>
              {totalAvailable}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Total Available
            </div>
          </div>

          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border text-center ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className={`text-3xl font-bold text-blue-500`}>
              {warehouses}
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Warehouses
            </div>
          </div>

          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border text-center ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className={`text-3xl font-bold text-orange-500`}>
              100%
            </div>
            <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              Visibility
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Inventory
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage your humanitarian aid inventory and stock levels
          </p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveView('catalog')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Package className="w-4 h-4" />
            <span>My Catalog</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Package className="w-6 h-6 text-blue-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {totalItems.toLocaleString()}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Items
              </p>
            </div>
          </div>
        </div>
        
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {lowStockItems}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Low Stock Items
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                78%
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Stock Efficiency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Items */}
      <div className="space-y-4">
        {inventoryItems.map((item) => {
          const stockPercentage = (item.currentStock / item.maxCapacity) * 100;
          
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
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm mb-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.category}
                    </span>
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      Supplier: {item.supplier}
                    </span>
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      Last restocked: {item.lastRestocked}
                    </span>
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

              {/* Stock Level Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Stock Level
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {item.currentStock} / {item.maxCapacity}
                  </span>
                </div>
                <div className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2`}>
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      stockPercentage > 50 ? 'bg-green-600' :
                      stockPercentage > 25 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    Min: {item.minThreshold}
                  </span>
                  <span className={`font-medium ${
                    stockPercentage > 50 ? 'text-green-600' :
                    stockPercentage > 25 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {Math.round(stockPercentage)}% capacity
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};