import React from 'react';
import { ShoppingCart, Package, DollarSign, Plus, Edit, HeadphonesIcon } from 'lucide-react';

export const SupplierDashboard: React.FC = () => {
  const cards = [
    {
      id: 'recent-orders',
      title: 'Recent Orders',
      description: 'Latest orders from humanitarian organizations',
      value: '18',
      subtitle: 'This month',
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
      action: 'View Orders'
    },
    {
      id: 'top-products',
      title: 'Top Products',
      description: 'Your most requested humanitarian supplies',
      value: '5',
      subtitle: 'Best sellers',
      icon: <Package className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-50',
      action: 'View Products'
    },
    {
      id: 'sales-summary',
      title: 'Sales Summary',
      description: 'Revenue from humanitarian supply sales',
      value: '€12,400',
      subtitle: 'This month',
      icon: <DollarSign className="w-8 h-8 text-emerald-500" />,
      bgColor: 'bg-emerald-50',
      action: 'View Analytics'
    },
    {
      id: 'add-product',
      title: 'Add Product',
      description: 'List new humanitarian supplies',
      value: 'Add Item',
      subtitle: 'Expand catalog',
      icon: <Plus className="w-8 h-8 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      action: 'Add Product',
      isAction: true
    },
    {
      id: 'update-inventory',
      title: 'Update Inventory',
      description: 'Modify stock levels and pricing',
      value: 'Update',
      subtitle: 'Manage stock',
      icon: <Edit className="w-8 h-8 text-purple-500" />,
      bgColor: 'bg-purple-50',
      action: 'Update Stock',
      isAction: true
    },
    {
      id: 'contact-support',
      title: 'Contact Support',
      description: 'Get help with orders and platform',
      value: 'Support',
      subtitle: '24/7 available',
      icon: <HeadphonesIcon className="w-8 h-8 text-gray-500" />,
      bgColor: 'bg-gray-50',
      action: 'Contact Us',
      isAction: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplier Dashboard</h1>
        <p className="text-gray-600">Manage your humanitarian supply catalog and orders</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cards.map(card => (
          <div 
            key={card.id} 
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                {card.icon}
              </div>
              {!card.isAction && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.subtitle}</div>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
              
              <button className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${
                card.isAction 
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}>
                {card.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};