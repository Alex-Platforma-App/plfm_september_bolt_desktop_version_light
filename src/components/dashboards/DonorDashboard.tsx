import React from 'react';
import { DollarSign, TrendingUp, Gift, MapPin, Heart } from 'lucide-react';
import { OverviewCard } from '../ui/OverviewCard';
import { DataTable } from '../ui/DataTable';

export const DonorDashboard: React.FC = () => {
  const fundedProjects = [
    {
      name: 'Kyiv Emergency Medical Station',
      organization: 'Ukrainian Medical Foundation',
      amount: '$2,500',
      completion: '95%',
      location: 'Kyiv, Ukraine',
      status: 'Active',
      lastUpdate: '2 hours ago'
    },
    {
      name: 'Lviv Children\'s Hospital Equipment',
      organization: 'Children\'s Aid Ukraine',
      amount: '$1,800',
      completion: '100%',
      location: 'Lviv, Ukraine',
      status: 'Completed',
      lastUpdate: '1 day ago'
    },
    {
      name: 'Kharkiv Evacuation Supplies',
      organization: 'Emergency Response Team',
      amount: '$950',
      completion: '100%',
      location: 'Kharkiv, Ukraine',
      status: 'Delivered',
      lastUpdate: '3 days ago'
    },
    {
      name: 'Odesa Medical Training Center',
      organization: 'Medical Education Alliance',
      amount: '$3,200',
      completion: '60%',
      location: 'Odesa, Ukraine',
      status: 'In Progress',
      lastUpdate: '1 week ago'
    }
  ];

  const projectColumns = [
    {
      key: 'name',
      title: 'Project Name',
      sortable: true,
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{row.organization}</div>
        </div>
      )
    },
    {
      key: 'amount',
      title: 'Funded Amount',
      sortable: true,
      render: (value: string) => (
        <span className="font-semibold text-gray-900">{value}</span>
      )
    },
    {
      key: 'completion',
      title: 'Progress',
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center space-x-2">
          <div className="w-20 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: value }}
            />
          </div>
          <span className="text-sm text-gray-600">{value}</span>
        </div>
      )
    },
    {
      key: 'location',
      title: 'Location',
      render: (value: string) => (
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">{value}</span>
        </div>
      )
    },
    {
      key: 'status',
      title: 'Status',
      render: (value: string) => {
        const statusColors = {
          'Active': 'bg-blue-100 text-blue-800',
          'Completed': 'bg-green-100 text-green-800',
          'Delivered': 'bg-purple-100 text-purple-800',
          'In Progress': 'bg-yellow-100 text-yellow-800'
        };
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[value as keyof typeof statusColors]}`}>
            {value}
          </span>
        );
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Donor Dashboard</h1>
        <p className="text-gray-600">Track your impact and manage your humanitarian contributions</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Total Donations"
          value="$8,450"
          subtitle="Lifetime giving"
          icon={<DollarSign className="w-6 h-6" />}
          color="green"
          trend={{ value: 23, isPositive: true }}
        />
        <OverviewCard
          title="Active Projects"
          value="4"
          subtitle="Currently funded"
          icon={<TrendingUp className="w-6 h-6" />}
          color="blue"
        />
        <OverviewCard
          title="People Helped"
          value="1,247"
          subtitle="Direct beneficiaries"
          icon={<Heart className="w-6 h-6" />}
          color="red"
          trend={{ value: 45, isPositive: true }}
        />
        <OverviewCard
          title="In-Kind Donations"
          value="23"
          subtitle="Items available"
          icon={<Gift className="w-6 h-6" />}
          color="purple"
        />
      </div>

      {/* Funded Projects */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Funded Projects</h2>
          <button className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
            View All Projects
          </button>
        </div>
        <DataTable 
          columns={projectColumns} 
          data={fundedProjects}
          searchPlaceholder="Search projects..."
        />
      </div>

      {/* Recent Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Impact</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Medical supplies delivered</p>
                <p className="text-sm text-gray-600">150 trauma kits reached Kyiv Emergency Center</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Project milestone reached</p>
                <p className="text-sm text-gray-600">Odesa Training Center 60% complete</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">New thank you message</p>
                <p className="text-sm text-gray-600">From children at Lviv Hospital</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Impact</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Kyiv Region</span>
              </div>
              <span className="font-semibold text-gray-900">$3,200</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Lviv Region</span>
              </div>
              <span className="font-semibold text-gray-900">$2,800</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Kharkiv Region</span>
              </div>
              <span className="font-semibold text-gray-900">$1,450</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Odesa Region</span>
              </div>
              <span className="font-semibold text-gray-900">$1,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};