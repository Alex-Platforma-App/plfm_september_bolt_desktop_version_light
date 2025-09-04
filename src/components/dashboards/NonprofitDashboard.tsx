import React from 'react';
import { Package, Target, FileText, Truck, AlertTriangle, TrendingUp } from 'lucide-react';
import { OverviewCard } from '../ui/OverviewCard';
import { DataTable } from '../ui/DataTable';

export const NonprofitDashboard: React.FC = () => {
  const inventoryData = [
    {
      name: 'HyFin Vent Chest Seal Twin Pack',
      sku: 'NAR-10-0013',
      quantity: 25,
      unit: 'Twin Pack',
      price: '$45',
      supplier: 'North American Rescue',
      status: 'Available',
      lastUpdated: '2 hours ago'
    },
    {
      name: 'Emergency Trauma Bandage',
      sku: 'NAR-30-0017',
      quantity: 150,
      unit: 'Unit',
      price: '$12',
      supplier: 'North American Rescue',
      status: 'Available',
      lastUpdated: '1 day ago'
    },
    {
      name: 'Emergency Rescue Blanket',
      sku: 'AMK-0140-1224',
      quantity: 300,
      unit: 'Blanket',
      price: '$3',
      supplier: 'Adventure Medical Kits',
      status: 'Available',
      lastUpdated: '3 hours ago'
    },
    {
      name: 'Medical Gauze Pads',
      sku: 'BBR-4022-100',
      quantity: 75,
      unit: 'Box',
      price: '$8',
      supplier: 'B.Braun',
      status: 'Available',
      lastUpdated: '5 hours ago'
    },
    {
      name: 'Instant Cold Pack',
      sku: 'DYN-1404',
      quantity: 0,
      unit: 'Pack',
      price: '$2',
      supplier: 'Dynarex',
      status: 'Out of Stock',
      lastUpdated: '1 week ago'
    }
  ];

  const inventoryColumns = [
    {
      key: 'name',
      title: 'Product',
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-slate-900">{value}</div>
          <div className="text-sm text-slate-500">SKU: {row.sku}</div>
        </div>
      )
    },
    {
      key: 'quantity',
      title: 'Stock',
      sortable: true,
      render: (value: number, row: any) => (
        <div>
          <span className={`font-semibold ${value === 0 ? 'text-red-600' : value < 50 ? 'text-orange-600' : 'text-slate-900'}`}>
            {value} {row.unit}
          </span>
        </div>
      )
    },
    {
      key: 'price',
      title: 'Unit Price',
      sortable: true,
      render: (value: string) => (
        <span className="font-medium text-slate-900">{value}</span>
      )
    },
    {
      key: 'supplier',
      title: 'Supplier',
      render: (value: string) => (
        <span className="text-slate-700">{value}</span>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => {
        const colors = {
          'Available': 'bg-green-100 text-green-800',
          'Out of Stock': 'bg-red-100 text-red-800',
          'Low Stock': 'bg-yellow-100 text-yellow-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[value as keyof typeof colors]}`}>
            {value}
          </span>
        );
      }
    }
  ];

  const fundraiserData = [
    {
      name: 'Kyiv Emergency Medical Station',
      goal: '$50,000',
      raised: '$47,500',
      percentage: 95,
      donors: 234,
      status: 'Active'
    },
    {
      name: 'Lviv Children\'s Hospital Equipment',
      goal: '$30,000',
      raised: '$18,000',
      percentage: 60,
      donors: 156,
      status: 'Active'
    },
    {
      name: 'Kharkiv Evacuation Supplies',
      goal: '$15,000',
      raised: '$15,000',
      percentage: 100,
      donors: 89,
      status: 'Completed'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Nonprofit Dashboard</h1>
        <p className="text-slate-600">Manage inventory, fundraisers, and humanitarian operations</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Inventory Items"
          value="1,247"
          subtitle="Total items"
          icon={<Package className="w-6 h-6" />}
          color="blue"
          trend={{ value: 5, isPositive: true }}
        />
        <OverviewCard
          title="Low Stock Items"
          value="23"
          subtitle="Need attention"
          icon={<AlertTriangle className="w-6 h-6" />}
          color="orange"
        />
        <OverviewCard
          title="Active Fundraisers"
          value="3"
          subtitle="$47,250 raised"
          icon={<Target className="w-6 h-6" />}
          color="green"
          trend={{ value: 15, isPositive: true }}
        />
        <OverviewCard
          title="Pending Requests"
          value="12"
          subtitle="Need approval"
          icon={<FileText className="w-6 h-6" />}
          color="yellow"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Current Inventory Status</h3>
          <DataTable 
            columns={inventoryColumns} 
            data={inventoryData.slice(0, 5)}
            searchable={false}
          />
          <div className="mt-4 text-center">
            <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
              View Full Inventory →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Fundraisers</h3>
          <div className="space-y-4">
            {fundraiserData.map((campaign, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">{campaign.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>{campaign.raised} raised of {campaign.goal}</span>
                  <span>{campaign.donors} donors</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${campaign.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-900">Distribution Analytics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Items Distributed This Month</span>
              <span className="font-semibold text-slate-900">847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Beneficiaries Served</span>
              <span className="font-semibold text-slate-900">2,134</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Average Delivery Time</span>
              <span className="font-semibold text-green-600">2.3 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Success Rate</span>
              <span className="font-semibold text-green-600">97.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Truck className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-900">Active Logistics</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-slate-900">Kyiv Medical Delivery</h4>
              <p className="text-sm text-slate-600">150 trauma kits → 3 hospitals</p>
              <p className="text-xs text-slate-500">ETA: 2 hours</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-slate-900">Lviv Supply Run</h4>
              <p className="text-sm text-slate-600">Medical equipment → Children's Hospital</p>
              <p className="text-xs text-slate-500">ETA: Tomorrow 9 AM</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-slate-900">Kharkiv Emergency Response</h4>
              <p className="text-sm text-slate-600">Evacuation supplies → Coordination Center</p>
              <p className="text-xs text-slate-500">Scheduled: This weekend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};