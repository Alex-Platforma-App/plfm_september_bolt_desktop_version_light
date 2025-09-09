import React from 'react';
import { BarChart3, TrendingUp, Package, Users, Activity, Heart, Target, MapPin } from 'lucide-react';

export const Analytics: React.FC = () => {
  const analyticsCards = [
    {
      title: 'Popular Items',
      icon: Package,
      description: 'Most requested humanitarian aid items across the platform',
      metrics: [
        { label: 'Most Requested in Wishlists', value: 'Medical supplies (34%), Winter clothing (28%), Food packages (22%)' },
        { label: 'Most Requested from Catalogs', value: 'Emergency medical kits, Thermal blankets, Hygiene supplies' },
        { label: 'High-Demand Categories', value: 'Medical supplies available in 89% of catalogs, requested in 94% of wishlists' },
        { label: 'Supply-Demand Gaps', value: 'Educational materials: high demand (67% wishlists) but low availability (23% catalogs)' }
      ]
    },
    {
      title: 'Request Insights',
      icon: BarChart3,
      description: 'Request patterns and fulfillment analytics',
      metrics: [
        { label: 'Recent Requests', value: '156 new wishlist items added this week across 12 oblasts' },
        { label: 'Open Requests', value: '1,247 unfulfilled items: 45% medical, 32% clothing, 23% other' },
        { label: 'Fulfillment Rate', value: '73% of requests marked completed within 14 days' }
      ]
    },
    {
      title: 'Platform Activity',
      icon: Activity,
      description: 'Real-time platform engagement and usage metrics',
      metrics: [
        { label: 'Active Users', value: '847 weekly active users (12% growth from last week)' },
        { label: 'Daily Transactions', value: 'Daily averages: 23 catalog updates, 45 wishlist additions, 18 fulfillments' },
        { label: 'New Organizations', value: '8 new verified organizations this week (5 nonprofits, 3 suppliers)' },
        { label: 'Geographic Activity', value: 'Active deliveries in Kyiv (34%), Lviv (18%), Kharkiv (16%), Others (32%)' }
      ]
    },
    {
      title: 'Featured Recipients',
      icon: Heart,
      description: 'Spotlight on recipients and community impact',
      metrics: [
        { label: 'Rotating Spotlight', value: 'This week: School #45 Lviv - Supporting 340 displaced children' },
        { label: 'New Recipients', value: '23 new recipient registrations this week across 8 oblasts' }
      ]
    }
  ];

  const regionalData = [
    { region: 'Kyiv Oblast', activity: '34%', requests: 423, fulfillments: 312 },
    { region: 'Lviv Oblast', activity: '18%', requests: 267, fulfillments: 198 },
    { region: 'Kharkiv Oblast', activity: '16%', requests: 234, fulfillments: 156 },
    { region: 'Odesa Oblast', activity: '12%', requests: 189, fulfillments: 134 },
    { region: 'Dnipro Oblast', activity: '10%', requests: 145, fulfillments: 98 },
    { region: 'Others', activity: '10%', requests: 167, fulfillments: 123 }
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
                  <div key={metricIndex} className="border-l-2 border-gray-100 pl-3">
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-700">
                      {metric.value}
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

      {/* Regional Activity Breakdown */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-100">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Regional Activity Breakdown
            </h3>
            <p className="text-sm text-gray-600">
              Geographic distribution of platform activity and fulfillment rates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {regionalData.map((region, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{region.region}</div>
                <div className="text-sm text-gray-600">
                  {region.requests} requests • {region.fulfillments} fulfilled
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-orange-600">{region.activity}</div>
                <div className="text-xs text-gray-500">of total activity</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Trends */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-green-100">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Platform Trends
            </h3>
            <p className="text-sm text-gray-600">
              Key performance indicators and growth metrics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">15,634</div>
            <div className="text-sm text-gray-600">Items Distributed</div>
            <div className="text-xs text-green-500 font-medium">+23% this month</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">73%</div>
            <div className="text-sm text-gray-600">Fulfillment Rate</div>
            <div className="text-xs text-green-500 font-medium">+5% improvement</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">847</div>
            <div className="text-sm text-gray-600">Weekly Active Users</div>
            <div className="text-xs text-green-500 font-medium">+12% growth</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">24</div>
            <div className="text-sm text-gray-600">Oblasts Covered</div>
            <div className="text-xs text-gray-500">100% coverage</div>
          </div>
        </div>
      </div>
    </div>
  );
};