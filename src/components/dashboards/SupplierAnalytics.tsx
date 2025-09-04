import React from 'react';
import { BarChart3, TrendingUp, Package, Euro, Users, Activity } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const SupplierAnalytics: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const analyticsData = [
    {
      title: 'Sales Performance',
      icon: Euro,
      metrics: [
        { label: 'Monthly Revenue', value: '€15,847', change: '+23%' },
        { label: 'Orders Fulfilled', value: '289', change: '+18%' },
        { label: 'Average Order Value', value: '€54.82', change: '+7%' }
      ]
    },
    {
      title: 'Product Performance',
      icon: Package,
      metrics: [
        { label: 'Top Product', value: 'N95 Masks', change: '234 requests' },
        { label: 'Categories Active', value: '8', change: '+2 this month' },
        { label: 'Inventory Turnover', value: '94%', change: '+12%' }
      ]
    },
    {
      title: 'Customer Insights',
      icon: Users,
      metrics: [
        { label: 'Active Customers', value: '67', change: '+15%' },
        { label: 'Repeat Orders', value: '78%', change: '+5%' },
        { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.2' }
      ]
    },
    {
      title: 'Platform Activity',
      icon: Activity,
      metrics: [
        { label: 'Profile Views', value: '1,247', change: '+31%' },
        { label: 'Catalog Downloads', value: '89', change: '+12%' },
        { label: 'Inquiries Received', value: '156', change: '+28%' }
      ]
    }
  ];

  const topRegions = [
    { region: 'Kyiv Oblast', orders: 89, revenue: '€4,234' },
    { region: 'Lviv Oblast', orders: 67, revenue: '€3,156' },
    { region: 'Kharkiv Oblast', orders: 45, revenue: '€2,890' },
    { region: 'Dnipro Oblast', orders: 34, revenue: '€1,967' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Platform Analytics
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Detailed insights into your supplier performance and market reach
        </p>
      </div>

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-2 gap-6">
        {analyticsData.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              style={gradientStyle}
              className={`rounded-xl p-6 border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  index === 0 ? 'bg-green-100 dark:bg-green-900/30' :
                  index === 1 ? 'bg-blue-100 dark:bg-blue-900/30' :
                  index === 2 ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    index === 0 ? 'text-green-600 dark:text-green-400' :
                    index === 1 ? 'text-blue-600 dark:text-blue-400' :
                    index === 2 ? 'text-purple-600 dark:text-purple-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
                </div>
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {card.title}
                </h3>
              </div>

              <div className="space-y-3">
                {card.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between">
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      {metric.label}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {metric.value}
                      </span>
                      <span className="text-xs text-green-500 font-medium">
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Regional Performance */}
      <div 
        style={gradientStyle}
        className={`rounded-xl p-6 border ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Top Performing Regions
        </h3>
        <div className="space-y-3">
          {topRegions.map((region, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {region.region}
                </span>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  {region.orders} orders
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  {region.revenue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};