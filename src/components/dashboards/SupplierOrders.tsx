import React, { useState } from 'react';
import { Package, Calendar, MapPin, CheckCircle, Clock, AlertTriangle, Euro, Search, Filter } from 'lucide-react';

export const SupplierOrders: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: 'ORD-2024-001',
      organization: 'Ukrainian Medical Foundation',
      contact: 'Dr. Olena Kovalenko',
      items: [
        { name: 'HyFin Chest Seals', quantity: 10, price: 45.00 },
        { name: 'Trauma Bandages', quantity: 25, price: 12.00 }
      ],
      totalValue: 750,
      status: 'Processing',
      orderDate: '2024-01-22',
      estimatedDelivery: '2024-01-25',
      shippingAddress: 'Kyiv Regional Hospital, Kyiv Oblast',
      priority: 'High'
    },
    {
      id: 'ORD-2024-002',
      organization: 'Red Cross Ukraine',
      contact: 'Andriy Petrenko',
      items: [
        { name: 'Emergency Blankets', quantity: 100, price: 3.50 },
        { name: 'First Aid Kits', quantity: 50, price: 12.50 }
      ],
      totalValue: 975,
      status: 'Shipped',
      orderDate: '2024-01-21',
      estimatedDelivery: '2024-01-24',
      shippingAddress: 'Lviv Distribution Center, Lviv Oblast',
      priority: 'Medium'
    },
    {
      id: 'ORD-2024-003',
      organization: 'Doctors Without Borders',
      contact: 'Maria Shevchenko',
      items: [
        { name: 'Medical Supplies Kit', quantity: 15, price: 85.00 },
        { name: 'Surgical Instruments', quantity: 5, price: 150.00 }
      ],
      totalValue: 2025,
      status: 'Delivered',
      orderDate: '2024-01-20',
      estimatedDelivery: '2024-01-23',
      shippingAddress: 'Kharkiv Medical Center, Kharkiv Oblast',
      priority: 'High'
    },
    {
      id: 'ORD-2024-004',
      organization: 'UNICEF Ukraine',
      contact: 'Oksana Bondarenko',
      items: [
        { name: 'Water Purification Tablets', quantity: 500, price: 0.12 },
        { name: 'Portable Water Filters', quantity: 10, price: 25.00 }
      ],
      totalValue: 310,
      status: 'Cancelled',
      orderDate: '2024-01-19',
      estimatedDelivery: '2024-01-22',
      shippingAddress: 'Zaporizhzhia Relief Center, Zaporizhzhia Oblast',
      priority: 'Low'
    }
  ];

  const statusOptions = ['all', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'Shipped':
        return <Package className="w-4 h-4 text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Cancelled':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-orange-100 text-orange-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Orders
          </h2>
          <p className="text-gray-600">
            Manage and track customer orders
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Statuses' : status}
            </option>
          ))}
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div 
            key={order.id}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {order.id}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(order.status)}
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(order.priority)}`}>
                    {order.priority} Priority
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <span className="text-gray-700">
                    <strong>Organization:</strong> {order.organization}
                  </span>
                  <span className="text-gray-600">
                    <strong>Contact:</strong> {order.contact}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      Ordered {order.orderDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {order.shippingAddress}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  €{order.totalValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  Est. delivery: {order.estimatedDelivery}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-medium text-gray-900">
                Order Items:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {order.items.map((item, index) => (
                  <div 
                    key={index}
                    className="px-3 py-2 bg-gray-50 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-600">€{item.price}</span>
                    </div>
                    <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {order.status === 'Processing' && (
                <>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                    Mark as Shipped
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm">
                    Cancel Order
                  </button>
                </>
              )}
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};