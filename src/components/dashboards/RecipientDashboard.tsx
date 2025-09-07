import React from 'react';
import { FileText, Truck, Heart, Plus, Edit, Users, HeadphonesIcon } from 'lucide-react';

export const RecipientDashboard: React.FC = () => {
  const cards = [
    {
      id: 'active-requests',
      title: 'Active Requests',
      description: 'Your current aid requests being processed',
      value: '3',
      subtitle: 'Pending approval',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
      action: 'View Requests'
    },
    {
      id: 'recent-deliveries',
      title: 'Recent Deliveries',
      description: 'Aid packages delivered in the last month',
      value: '7',
      subtitle: 'Items received',
      icon: <Truck className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-50',
      action: 'Track Deliveries'
    },
    {
      id: 'wishlist-summary',
      title: 'Wishlist Summary',
      description: 'Priority items you need most',
      value: '12',
      subtitle: 'Items needed',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      bgColor: 'bg-red-50',
      action: 'View Wishlist'
    },
    {
      id: 'create-request',
      title: 'Create Request',
      description: 'Submit a new aid request',
      value: 'Request',
      subtitle: 'New submission',
      icon: <Plus className="w-8 h-8 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      action: 'Create Request',
      isAction: true
    },
    {
      id: 'update-wishlist',
      title: 'Update Wishlist',
      description: 'Modify your priority needs list',
      value: 'Update',
      subtitle: 'Edit priorities',
      icon: <Edit className="w-8 h-8 text-purple-500" />,
      bgColor: 'bg-purple-50',
      action: 'Update List',
      isAction: true
    },
    {
      id: 'contact-nonprofit',
      title: 'Contact Nonprofit',
      description: 'Reach out to partner organizations',
      value: 'Connect',
      subtitle: 'Get assistance',
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      bgColor: 'bg-indigo-50',
      action: 'Contact Now',
      isAction: true
    },
    {
      id: 'contact-support',
      title: 'Contact Support',
      description: 'Get help with requests and platform',
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipient Dashboard</h1>
        <p className="text-gray-600">Manage your aid requests and track deliveries</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cards.slice(0, 6).map(card => (
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