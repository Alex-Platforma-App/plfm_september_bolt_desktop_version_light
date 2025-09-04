import React from 'react';
import { BarChart3, Users, MapPin, Heart, TrendingUp, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const DonorImpactMetrics: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const impactMetrics = [
    {
      title: 'Geographic Impact',
      icon: Globe,
      metrics: [
        { label: 'Oblasts Reached', value: '12/24', change: '+3 this month' },
        { label: 'Cities Covered', value: '47', change: '+8 new cities' },
        { label: 'Rural Communities', value: '23', change: '+5 communities' }
      ]
    },
    {
      title: 'Beneficiary Impact',
      icon: Users,
      metrics: [
        { label: 'People Helped', value: '1,247', change: '+25%' },
        { label: 'Families Supported', value: '389', change: '+18%' },
        { label: 'Children Reached', value: '567', change: '+31%' }
      ]
    },
    {
      title: 'Aid Distribution',
      icon: Heart,
      metrics: [
        { label: 'Items Distributed', value: '8,492', change: '+22%' },
        { label: 'Medical Supplies', value: '3,456', change: '+28%' },
        { label: 'Emergency Kits', value: '1,234', change: '+15%' }
      ]
    },
    {
      title: 'Success Metrics',
      icon: TrendingUp,
      metrics: [
        { label: 'Success Rate', value: '94%', change: '+5%' },
        { label: 'Response Time', value: '2.3 days', change: '-12%' },
        { label: 'Satisfaction Score', value: '4.8/5', change: '+0.3' }
      ]
    }
  ];

  const regionalImpact = [
    { region: 'Kyiv Oblast', beneficiaries: 347, projects: 5, funding: '€4,567' },
    { region: 'Kharkiv Oblast', beneficiaries: 289, projects: 3, funding: '€3,234' },
    { region: 'Lviv Oblast', beneficiaries: 234, projects: 4, funding: '€2,890' },
    { region: 'Dnipro Oblast', beneficiaries: 178, projects: 2, funding: '€1,567' },
    { region: 'Zaporizhzhia Oblast', beneficiaries: 199, projects: 3, funding: '€2,234' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Impact Metrics
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Detailed analysis of your humanitarian aid impact across Ukraine
        </p>
      </div>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-2 gap-6">
        {impactMetrics.map((card, index) => {
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
                  index === 0 ? 'bg-blue-100 dark:bg-blue-900/30' :
                  index === 1 ? 'bg-green-100 dark:bg-green-900/30' :
                  index === 2 ? 'bg-red-100 dark:bg-red-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    index === 0 ? 'text-blue-600 dark:text-blue-400' :
                    index === 1 ? 'text-green-600 dark:text-green-400' :
                    index === 2 ? 'text-red-600 dark:text-red-400' :
                    'text-purple-600 dark:text-purple-400'
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

      {/* Regional Impact Breakdown */}
      <div 
        style={gradientStyle}
        className={`rounded-xl p-6 border ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Regional Impact Breakdown
        </h3>
        <div className="space-y-4">
          {regionalImpact.map((region, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                <div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {region.region}
                  </span>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    {region.projects} projects • {region.beneficiaries} beneficiaries
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  {region.funding}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};