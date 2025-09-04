import React from 'react';
import { BarChart3, TrendingUp, Package, Users, Activity, Heart } from 'lucide-react';

export const Analytics: React.FC = () => {
  const analyticsCards = [
    {
      title: 'Popular Items',
      icon: Package,
      description: 'Most requested humanitarian aid items',
      metrics: [
        { label: 'N95 Masks', value: '234 requests', trend: '+15%' },
        { label: 'Thermal Blankets', value: '189 requests', trend: '+8%' },
        { label: 'Water Purification', value: '167 requests', trend: '+23%' }
      ]
    },
    {
      title: 'Request Insights',
      icon: BarChart3,
      description: 'Request patterns and fulfillment rates',
      metrics: [
        { label: 'Fulfillment Rate', value: '94%', trend: '+5%' },
        { label: 'Avg Response Time', value: '2.3 days', trend: '-12%' },
        { label: 'Open Requests', value: '347', trend: '+18%' }
      ]
    },
    {
      title: 'Platform Activity',
      icon: Activity,
      description: 'Real-time platform engagement metrics',
      metrics: [
        { label: 'Active Users', value: '1,247', trend: '+22%' },
        { label: 'Daily Transactions', value: '89', trend: '+7%' },
        { label: 'New Organizations', value: '+18', trend: '+31%' }
      ]
    },
    {
      title: 'Impact Metrics',
      icon: Heart,
      description: 'Humanitarian impact and reach statistics',
      metrics: [
        { label: 'Lives Impacted', value: '8,492', trend: '+25%' },
        { label: 'Oblasts Covered', value: '18/24', trend: '+3' },
        { label: 'Aid Value', value: '€2.4M', trend: '+33%' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Analytics
        </h2>
        <p className="text-gray-600">
          Platform-wide insights and humanitarian impact data
        </p>
      </div>

      {/* Analytics Overview Grid */}
      <div className="grid grid-cols-2 gap-6">
        {analyticsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  index === 0 ? 'bg-blue-100' :
                  index === 1 ? 'bg-green-100' :
                  index === 2 ? 'bg-purple-100' :
                  'bg-red-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    index === 0 ? 'text-blue-600' :
                    index === 1 ? 'text-green-600' :
                    index === 2 ? 'text-purple-600' :
                    'text-red-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {card.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {metric.label}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">
                        {metric.value}
                      </span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-green-500 font-medium">
                          {metric.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 text-sm font-medium rounded-lg transition-colors text-blue-600 hover:bg-blue-50">
                View Detailed Analytics
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};