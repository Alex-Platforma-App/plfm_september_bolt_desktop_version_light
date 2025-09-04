import React, { useState } from 'react';
import { CheckCircle, Clock, X, Package, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const NonprofitRequests: React.FC = () => {
  const { theme } = useTheme();
  const [statusFilter, setStatusFilter] = useState('all');

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const requests = [
    {
      id: '1',
      title: 'Emergency Medical Supplies - Kharkiv Hospital',
      requester: 'Kharkiv Regional Hospital',
      location: 'Kharkiv Oblast',
      items: ['N95 Masks (500 units)', 'Medical Gloves (1000 pairs)', 'Hand Sanitizer (50 bottles)'],
      urgency: 'High',
      status: 'Pending',
      submittedDate: '2024-01-18',
      estimatedValue: '€2,450'
    },
    {
      id: '2',
      title: 'Winter Supplies for Displaced Families',
      requester: 'Lviv Community Center',
      location: 'Lviv Oblast',
      items: ['Thermal Blankets (200 units)', 'Winter Jackets (100 units)', 'Warm Socks (300 pairs)'],
      urgency: 'Medium',
      status: 'Approved',
      submittedDate: '2024-01-16',
      estimatedValue: '€1,890',
      approvedDate: '2024-01-17'
    },
    {
      id: '3',
      title: 'Educational Materials for Children',
      requester: 'Save the Children Dnipro',
      location: 'Dnipro Oblast',
      items: ['School Supplies (150 sets)', 'Educational Books (200 units)', 'Art Materials (75 sets)'],
      urgency: 'Low',
      status: 'Fulfilled',
      submittedDate: '2024-01-14',
      estimatedValue: '€980',
      approvedDate: '2024-01-15',
      fulfilledDate: '2024-01-17'
    },
    {
      id: '4',
      title: 'Water Purification Equipment',
      requester: 'Zaporizhzhia Relief Center',
      location: 'Zaporizhzhia Oblast',
      items: ['Water Filters (10 units)', 'Purification Tablets (2000 units)', 'Testing Kits (5 units)'],
      urgency: 'High',
      status: 'Rejected',
      submittedDate: '2024-01-12',
      estimatedValue: '€3,200',
      rejectedDate: '2024-01-13',
      rejectionReason: 'Insufficient inventory'
    },
    {
      id: '5',
      title: 'Food Packages for Emergency Distribution',
      requester: 'Caritas Odesa',
      location: 'Odesa Oblast',
      items: ['Emergency Food Packages (300 units)', 'Baby Formula (50 units)', 'Nutritional Supplements (100 units)'],
      urgency: 'Medium',
      status: 'Pending',
      submittedDate: '2024-01-17',
      estimatedValue: '€4,100'
    }
  ];

  const statusOptions = ['all', 'Pending', 'Approved', 'Fulfilled', 'Rejected'];

  const filteredRequests = requests.filter(request => 
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
      case 'Rejected':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Fulfilled':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Rejected':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
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

  const pendingCount = requests.filter(r => r.status === 'Pending').length;
  const approvedCount = requests.filter(r => r.status === 'Approved').length;
  const urgentCount = requests.filter(r => r.urgency === 'High' && r.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Requests
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Review and manage incoming aid requests from recipients
        </p>
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
            <Clock className="w-6 h-6 text-yellow-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {pendingCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Pending Approval
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
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {approvedCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Approved This Month
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
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {urgentCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Urgent Requests
              </p>
            </div>
          </div>
        </div>
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
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getUrgencyColor(request.urgency)}`}>
                    {request.urgency} Priority
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    <strong>From:</strong> {request.requester}
                  </span>
                  <div className="flex items-center space-x-1">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      {request.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      Submitted {request.submittedDate}
                    </span>
                  </div>
                </div>
                {request.rejectionReason && (
                  <p className={`text-sm text-red-500 mb-3`}>
                    <strong>Rejection Reason:</strong> {request.rejectionReason}
                  </p>
                )}
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  {request.estimatedValue}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  Estimated Value
                </div>
              </div>
            </div>

            {/* Requested Items */}
            <div className="space-y-2 mb-4">
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

            {/* Action Buttons */}
            {request.status === 'Pending' && (
              <div className="flex space-x-2">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                  Approve Request
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm">
                  Reject Request
                </button>
                <button className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                  theme === 'dark'
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};