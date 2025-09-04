import React from 'react';
import { Calendar, Euro, Heart, MapPin, CheckCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const DonorHistory: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const donationHistory = [
    {
      id: '1',
      amount: 500,
      project: 'Winter Aid Campaign - Kyiv Oblast',
      organization: 'Ukrainian Red Cross',
      date: '2024-01-15',
      status: 'Completed',
      beneficiaries: 67,
      type: 'Project Funding'
    },
    {
      id: '2',
      amount: 250,
      project: 'Emergency Medical Supplies',
      organization: 'MSF Ukraine',
      date: '2024-01-10',
      status: 'Completed',
      beneficiaries: 123,
      type: 'Direct Aid'
    },
    {
      id: '3',
      amount: 750,
      project: 'School Supplies for Displaced Children',
      organization: 'Save the Children Ukraine',
      date: '2024-01-05',
      status: 'In Progress',
      beneficiaries: 89,
      type: 'Education Support'
    },
    {
      id: '4',
      amount: 300,
      project: 'Water Purification - Zaporizhzhia',
      organization: 'UNICEF Ukraine',
      date: '2023-12-28',
      status: 'Completed',
      beneficiaries: 234,
      type: 'Infrastructure'
    },
    {
      id: '5',
      amount: 450,
      project: 'Thermal Blankets Distribution',
      organization: 'Caritas Ukraine',
      date: '2023-12-20',
      status: 'Completed',
      beneficiaries: 156,
      type: 'Emergency Aid'
    }
  ];

  const totalDonated = donationHistory.reduce((sum, donation) => sum + donation.amount, 0);
  const totalBeneficiaries = donationHistory.reduce((sum, donation) => sum + donation.beneficiaries, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Donation History
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Complete record of your humanitarian aid contributions
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
            <Euro className="w-6 h-6 text-green-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                €{totalDonated.toLocaleString()}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Donated
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
            <Heart className="w-6 h-6 text-red-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {donationHistory.length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Donations Made
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
            <Heart className="w-6 h-6 text-blue-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {totalBeneficiaries.toLocaleString()}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation History List */}
      <div className="space-y-4">
        {donationHistory.map((donation) => (
          <div 
            key={donation.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {donation.project}
                  </h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(donation.status)}`}>
                    {donation.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <div className="flex items-center space-x-1">
                    <Heart className={`w-4 h-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                      {donation.organization}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      {donation.date}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  {donation.type}
                </span>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  €{donation.amount}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                  {donation.beneficiaries} beneficiaries
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};