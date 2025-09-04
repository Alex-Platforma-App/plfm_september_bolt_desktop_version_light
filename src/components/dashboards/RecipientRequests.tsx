import React, { useState } from 'react';
import { Plus, Package, Calendar, MapPin, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const RecipientRequests: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const [statusFilter, setStatusFilter] = useState('all');

  const myRequests = [
    {
      id: '1',
      title: 'Emergency Medical Supplies',
      description: 'Urgent need for surgical masks, gloves, and antiseptics for our medical facility',
      items: ['N95 Masks (500 units)', 'Medical Gloves (1000 pairs)', 'Hand Sanitizer (50 bottles)'],
      status: 'Approved',
      urgency: 'High',
      submittedDate: '2024-01-15',
      approvedBy: 'Ukrainian Red Cross',
      estimatedDelivery: '2024-01-20'
    },
    {
      id: '2',
      title: 'Winter Supplies for Families',
      description: 'Thermal blankets and warm clothing for 50 displaced families in our shelter',
      items: ['Thermal Blankets (100 units)', 'Winter Jackets (Adult - 50)', 'Children Clothing (25 sets)'],
      status: 'Pending',
      urgency: 'Medium',
      submittedDate: '2024-01-12',
      approvedBy: null,
      estimatedDelivery: null
    },
    {
      id: '3',
      title: 'Water Purification Equipment',
      description: 'Clean water access equipment for our community shelter',
      items: ['Water Purification Tablets (1000 units)', 'Portable Water Filters (5 units)'],
      status: 'Fulfilled',
      urgency: 'High',
      submittedDate: '2024-01-08',
      approvedBy: 'UNICEF Ukraine',
      estimatedDelivery: '2024-01-15'
    },
    {
      id: '4',
      title: 'Educational Materials',
      description: 'School supplies and learning materials for displaced children',
      items: ['Notebooks (200 units)', 'Pencils & Pens (100 sets)', 'Educational Books (50 sets)'],
      status: 'Approved',
      urgency: 'Low',
      submittedDate: '2024-01-10',
      approvedBy: 'Save the Children Ukraine',
      estimatedDelivery: '2024-01-22'
    }
  ];

  const statusOptions = ['all', 'Pending', 'Approved', 'Fulfilled'];

  const filteredRequests = myRequests.filter(request => 
    statusFilter === 'all' || request.status === statusFilter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Fulfilled':
        return <CheckCircle className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Requests
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Track your submitted aid requests and their status
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Request</span>
        </button>
      </div>

      {/* Status Filter */}
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Filter by status:
        </span>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-600 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Statuses' : status}
            </option>
          ))}
        </select>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div 
            key={request.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {request.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(request.status)}
                    <span className={`text-sm font-medium ${
                      request.status === 'Approved' ? 'text-green-500' :
                      request.status === 'Pending' ? 'text-yellow-500' :
                      request.status === 'Fulfilled' ? 'text-blue-500' :
                      'text-gray-500'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getUrgencyColor(request.urgency)}`}>
                    {request.urgency} Priority
                  </span>
                </div>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {request.description}
                </p>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      Submitted {request.submittedDate}
                    </span>
                  </div>
                  {request.approvedBy && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        Approved by {request.approvedBy}
                      </span>
                    </div>
                  )}
                  {request.estimatedDelivery && (
                    <div className="flex items-center space-x-1">
                      <Package className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        Expected {request.estimatedDelivery}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Requested Items */}
            <div className="space-y-2">
              <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Requested Items:
              </h4>
              <div className="flex flex-wrap gap-2">
                {request.items.map((item, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-xs rounded-full ${
                      theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};