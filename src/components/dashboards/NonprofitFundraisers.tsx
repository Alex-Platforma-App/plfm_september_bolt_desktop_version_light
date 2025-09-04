import React from 'react';
import { DollarSign, Users, Calendar, Target, TrendingUp, Plus } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const NonprofitFundraisers: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const fundraisers = [
    {
      id: '1',
      title: 'Winter Emergency Relief Fund',
      description: 'Providing thermal blankets and heating supplies for displaced families',
      goal: 25000,
      raised: 18750,
      donors: 234,
      daysLeft: 15,
      status: 'Active',
      category: 'Emergency Relief'
    },
    {
      id: '2',
      title: 'Medical Equipment for Kharkiv Hospital',
      description: 'Critical medical equipment and supplies for regional hospital',
      goal: 50000,
      raised: 42300,
      donors: 156,
      daysLeft: 8,
      status: 'Active',
      category: 'Healthcare'
    },
    {
      id: '3',
      title: 'Educational Support Program',
      description: 'School supplies and learning materials for displaced children',
      goal: 15000,
      raised: 15000,
      donors: 89,
      daysLeft: 0,
      status: 'Completed',
      category: 'Education'
    },
    {
      id: '4',
      title: 'Clean Water Initiative',
      description: 'Water purification systems for affected communities',
      goal: 30000,
      raised: 8900,
      donors: 67,
      daysLeft: 22,
      status: 'Active',
      category: 'Water & Sanitation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Completed':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const totalRaised = fundraisers.reduce((sum, fundraiser) => sum + fundraiser.raised, 0);
  const totalDonors = fundraisers.reduce((sum, fundraiser) => sum + fundraiser.donors, 0);
  const activeCampaigns = fundraisers.filter(f => f.status === 'Active').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Fundraisers
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage your fundraising campaigns and track donations
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Campaign</span>
        </button>
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
            <DollarSign className="w-6 h-6 text-green-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                €{totalRaised.toLocaleString()}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Raised
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
            <Users className="w-6 h-6 text-blue-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {totalDonors}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Donors
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
            <Target className="w-6 h-6 text-purple-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {activeCampaigns}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Active Campaigns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fundraisers List */}
      <div className="space-y-4">
        {fundraisers.map((fundraiser) => {
          const progressPercentage = (fundraiser.raised / fundraiser.goal) * 100;
          
          return (
            <div 
              key={fundraiser.id}
              style={gradientStyle}
              className={`rounded-xl p-6 border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {fundraiser.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(fundraiser.status)}`}>
                      {fundraiser.status}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {fundraiser.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {fundraiser.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Users className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        {fundraiser.donors} donors
                      </span>
                    </div>
                    {fundraiser.daysLeft > 0 && (
                      <div className="flex items-center space-x-1">
                        <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                        <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                          {fundraiser.daysLeft} days left
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    €{fundraiser.raised.toLocaleString()}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    of €{fundraiser.goal.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Funding Progress
                  </span>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2`}>
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};