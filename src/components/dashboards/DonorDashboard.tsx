import React from 'react';
import { Heart, TrendingUp, DollarSign, Plus, Gift, HeadphonesIcon } from 'lucide-react';

export const DonorDashboard: React.FC = () => {
  const cards = [
    {
      id: 'recent-donations',
      title: 'Recent Donations',
      description: 'Your latest contributions to humanitarian causes',
      value: '€2,450',
      subtitle: 'Last 30 days',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      bgColor: 'bg-red-50',
      action: 'View History'
    },
    {
      id: 'current-impact',
      title: 'Current Impact',
      description: 'People helped through your donations',
      value: '1,247',
      subtitle: 'Lives impacted',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-50',
      action: 'View Metrics'
    },
    {
      id: 'active-projects',
      title: 'Active Projects',
      description: 'Projects currently funded by your donations',
      value: '4',
      subtitle: 'Projects ongoing',
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
      action: 'View Projects'
    },
    {
      id: 'make-donation',
      title: 'Make Donation',
      description: 'Support new humanitarian projects',
      value: 'Donate',
      subtitle: 'Quick donation',
      icon: <Plus className="w-8 h-8 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      action: 'Donate Now',
      isAction: true
    },
    {
      id: 'add-to-give',
      title: 'Add To Give Item',
      description: 'Contribute physical items to aid efforts',
      value: 'Add Item',
      subtitle: 'In-kind donation',
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      bgColor: 'bg-purple-50',
      action: 'Add Item',
      isAction: true
    },
    {
      id: 'contact-support',
      title: 'Contact Support',
      description: 'Get help with donations and platform',
      value: 'Support',
      subtitle: '24/7 available',
      icon: <HeadphonesIcon className="w-8 h-8 text-gray-500" />,
      bgColor: 'bg-gray-50',
      action: 'Contact Us',
      isAction: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Donor Dashboard</h1>
        <p className="text-gray-600">Manage your humanitarian contributions and track your impact</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cards.map(card => (
          <div 
            key={card.id} 
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                {card.icon}
              </div>
              {!card.isAction && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.subtitle}</div>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
              
              <button className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${
                card.isAction 
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}>
                {card.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};