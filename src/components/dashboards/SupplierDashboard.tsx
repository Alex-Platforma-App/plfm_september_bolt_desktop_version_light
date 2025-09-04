import React from 'react';
import { Package, ShoppingCart, TrendingUp, FileText, DollarSign, Users } from 'lucide-react';
import { OverviewCard } from '../ui/OverviewCard';
import { DataTable } from '../ui/DataTable';

export const SupplierDashboard: React.FC = () => {
  const catalogData = [
    {
      name: 'HyFin Vent Chest Seal Twin Pack',
      category: 'Trauma Care',
      price: '$45.00',
      stock: 250,
      orders: 15,
      revenue: '$675'
    },
    {
      name: 'Emergency Trauma Bandage',
      category: 'Wound Care',
      price: '$12.00',
      stock: 500,
      orders: 42,
      revenue: '$504'
    },
    {
      name: 'Combat Application Tourniquet',
      category: 'Hemorrhage Control',
      price: '$35.00',
      stock: 180,
      orders: 28,
      revenue: '$980'
    },
    {
      name: 'Emergency Rescue Blanket',
      category: 'Thermal Protection',
      price: '$3.00',
      stock: 1000,
      orders: 95,
      revenue: '$285'
    },
    {
      name: 'Medical Gauze Pads (Box)',
      category: 'Wound Care',
      price: '$8.00',
      stock: 320,
      orders: 67,
      revenue: '$536'
    }
  ];

  const orderData = [
    {
      orderID: 'ORD-2024-001',
      organization: 'Ukrainian Medical Foundation',
      items: 'Chest Seals (10), Bandages (25)',
      value: '$750',
      status: 'Processing',
      date: '2024-01-22'
    },
    {
      orderID: 'ORD-2024-002',
      organization: 'Red Cross Ukraine',
      items: 'Trauma Kits (50)',
      value: '$1,250',
      status: 'Shipped',
      date: '2024-01-21'
    },
    {
      orderID: 'ORD-2024-003',
      organization: 'Doctors Without Borders',
      items: 'Medical Supplies (Various)',
      value: '$2,100',
      status: 'Delivered',
      date: '2024-01-20'
    }
  ];

  const catalogColumns = [
    {
      key: 'name',
      title: 'Product',
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-slate-900">{value}</div>
          <div className="text-sm text-slate-500">{row.category}</div>
        </div>
      )
    },
    {
      key: 'price',
      title: 'Price',
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-slate-900">{value}</span>
      )
    },
    {
      key: 'stock',
      title: 'Stock',
      sortable: true,
      render: (value: number) => (
        <span className={`font-medium ${value < 100 ? 'text-orange-600' : 'text-slate-900'}`}>
          {value}
        </span>
      )
    },
    {
      key: 'orders',
      title: 'Orders',
      sortable: true,
      render: (value: number) => (
        <span className="text-slate-700">{value}</span>
      )
    },
    {
      key: 'revenue',
      title: 'Revenue',
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-green-600">{value}</span>
      )
    }
  ];

  const orderColumns = [
    {
      key: 'orderID',
      title: 'Order ID',
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-sm text-slate-700">{value}</span>
      )
    },
    {
      key: 'organization',
      title: 'Organization',
      sortable: true,
      render: (value: string) => (
        <span className="font-medium text-slate-900">{value}</span>
      )
    },
    {
      key: 'items',
      title: 'Items',
      render: (value: string) => (
        <span className="text-slate-700">{value}</span>
      )
    },
    {
      key: 'value',
      title: 'Value',
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-slate-900">{value}</span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => {
        const colors = {
          'Processing': 'bg-yellow-100 text-yellow-800',
          'Shipped': 'bg-blue-100 text-blue-800',
          'Delivered': 'bg-green-100 text-green-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[value as keyof typeof colors]}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: 'date',
      title: 'Date',
      sortable: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Supplier Dashboard</h1>
        <p className="text-slate-600">Manage your humanitarian supply catalog and orders</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Total Products"
          value="342"
          subtitle="Active listings"
          icon={<Package className="w-6 h-6" />}
          color="blue"
          trend={{ value: 8, isPositive: true }}
        />
        <OverviewCard
          title="Orders This Month"
          value="89"
          subtitle="New orders"
          icon={<ShoppingCart className="w-6 h-6" />}
          color="green"
          trend={{ value: 23, isPositive: true }}
        />
        <OverviewCard
          title="Monthly Revenue"
          value="$12,400"
          subtitle="This month"
          icon={<DollarSign className="w-6 h-6" />}
          color="green"
          trend={{ value: 18, isPositive: true }}
        />
        <OverviewCard
          title="Active Customers"
          value="47"
          subtitle="Organizations"
          icon={<Users className="w-6 h-6" />}
          color="purple"
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      {/* Product Performance */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Top Performing Products</h2>
          <button className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
            Manage Full Catalog
          </button>
        </div>
        <DataTable 
          columns={catalogColumns} 
          data={catalogData}
          searchPlaceholder="Search products..."
        />
      </div>

      {/* Recent Orders */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Recent Orders</h2>
          <button className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
            View All Orders
          </button>
        </div>
        <DataTable 
          columns={orderColumns} 
          data={orderData}
          searchPlaceholder="Search orders..."
        />
      </div>

      {/* Business Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-900">Sales Analytics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Total Revenue</span>
              <span className="font-semibold text-slate-900">$47,250</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Average Order Value</span>
              <span className="font-semibold text-slate-900">$531</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Conversion Rate</span>
              <span className="font-semibold text-green-600">23.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Customer Retention</span>
              <span className="font-semibold text-green-600">87.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-900">Document Status</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">12</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Business Certifications</p>
                <p className="text-sm text-slate-500">All current and valid</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">34</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Product Invoices</p>
                <p className="text-sm text-slate-500">Recent transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-yellow-600">3</span>
              </div>
              <div>
                <p className="font-medium text-slate-900">Expiring Soon</p>
                <p className="text-sm text-slate-500">Need renewal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};