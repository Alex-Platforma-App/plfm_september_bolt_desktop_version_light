import React from 'react';
import { FileText, Heart, Truck, Star, Clock, CheckCircle } from 'lucide-react';
import { OverviewCard } from '../ui/OverviewCard';
import { DataTable } from '../ui/DataTable';

export const RecipientDashboard: React.FC = () => {
  const myRequests = [
    {
      title: 'Emergency Medical Supplies',
      organization: 'Red Cross Ukraine',
      status: 'Approved',
      amount: '$450',
      submittedDate: '2024-01-15',
      urgency: 'High'
    },
    {
      title: 'Winter Clothing for Family',
      organization: 'Caritas Ukraine',
      status: 'Pending',
      amount: '$280',
      submittedDate: '2024-01-18',
      urgency: 'Medium'
    },
    {
      title: 'Educational Materials',
      organization: 'Save the Children',
      status: 'Under Review',
      amount: '$120',
      submittedDate: '2024-01-20',
      urgency: 'Low'
    },
    {
      title: 'Food Package',
      organization: 'World Food Programme',
      status: 'Delivered',
      amount: '$85',
      submittedDate: '2024-01-10',
      urgency: 'High'
    }
  ];

  const requestColumns = [
    {
      key: 'title',
      title: 'Request',
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-slate-900">{value}</div>
          <div className="text-sm text-slate-500">{row.organization}</div>
        </div>
      )
    },
    {
      key: 'amount',
      title: 'Value',
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-slate-900">{value}</span>
      )
    },
    {
      key: 'urgency',
      title: 'Priority',
      render: (value: string) => {
        const colors = {
          'High': 'bg-red-100 text-red-800',
          'Medium': 'bg-yellow-100 text-yellow-800',
          'Low': 'bg-green-100 text-green-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[value as keyof typeof colors]}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => {
        const colors = {
          'Approved': 'bg-green-100 text-green-800',
          'Pending': 'bg-yellow-100 text-yellow-800',
          'Under Review': 'bg-blue-100 text-blue-800',
          'Delivered': 'bg-purple-100 text-purple-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[value as keyof typeof colors]}`}>
            {value}
          </span>
        );
      }
    },
    {
      key: 'submittedDate',
      title: 'Submitted',
      sortable: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Recipient Dashboard</h1>
        <p className="text-slate-600">Manage your aid requests and track deliveries</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Active Requests"
          value="4"
          subtitle="Pending responses"
          icon={<FileText className="w-6 h-6" />}
          color="blue"
        />
        <OverviewCard
          title="Total Aid Received"
          value="$1,915"
          subtitle="Lifetime value"
          icon={<Heart className="w-6 h-6" />}
          color="red"
          trend={{ value: 18, isPositive: true }}
        />
        <OverviewCard
          title="Shipments in Transit"
          value="2"
          subtitle="On the way"
          icon={<Truck className="w-6 h-6" />}
          color="orange"
        />
        <OverviewCard
          title="Favorite Nonprofits"
          value="8"
          subtitle="Trusted organizations"
          icon={<Star className="w-6 h-6" />}
          color="yellow"
        />
      </div>

      {/* My Requests Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">My Requests</h2>
          <button className="px-4 py-2 bg-yellow-400 text-slate-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
            Submit New Request
          </button>
        </div>
        <DataTable 
          columns={requestColumns} 
          data={myRequests}
          searchPlaceholder="Search requests..."
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Request approved</p>
                <p className="text-sm text-slate-600">Emergency medical supplies - $450</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Truck className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Shipment dispatched</p>
                <p className="text-sm text-slate-600">Food package from WFP - ETA: Tomorrow</p>
                <p className="text-xs text-slate-500">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">New wishlist match</p>
                <p className="text-sm text-slate-600">Winter clothing available from local donor</p>
                <p className="text-xs text-slate-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Delivery Tracking</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-slate-900">Emergency Medical Package</h4>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">In Transit</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">From: Red Cross Warehouse, Warsaw</p>
              <p className="text-sm text-slate-600 mb-3">ETA: Today, 3:00 PM</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-slate-900">Winter Clothing Set</h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Processing</span>
              </div>
              <p className="text-sm text-slate-600 mb-2">From: Local Donor, Kyiv</p>
              <p className="text-sm text-slate-600 mb-3">ETA: Tomorrow, 10:00 AM</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};