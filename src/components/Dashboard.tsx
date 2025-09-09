import React from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { DonorDashboard } from './dashboards/DonorDashboard';
import { RecipientDashboard } from './dashboards/RecipientDashboard';
import { NonprofitDashboard } from './dashboards/NonprofitDashboard';
import { SupplierDashboard } from './dashboards/SupplierDashboard';
import { HomeDashboard } from './dashboards/HomeDashboard';
import { Heart, Users, Eye, UserPlus, Package, Search, TrendingUp, MapPin } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { currentRole, currentOrganization } = useApp();
  const { isAuthenticated } = useAuth();

  // Standard User Dashboard (2x2 Grid)
  const standardUserCards = [
    {
      id: 'my-follows',
      title: 'My Follows',
      description: 'Track your followed content and organizations',
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Wishlists Followed</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">8 wishlists</span>
              <button className="text-xs text-blue-600 hover:text-blue-700">View All</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Organizations Connected</span>
            <span className="font-semibold text-gray-900">6 organizations</span>
          </div>
          <div className="text-xs text-gray-500">3 nonprofits, 2 suppliers, 1 recipient</div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Catalogs Followed</span>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">12 catalogs</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="text-xs text-red-600">3 new updates available</div>
        </div>
      ),
      icon: <Heart className="w-8 h-8 text-red-500" />,
      bgColor: 'bg-red-50'
    },
    {
      id: 'platform-engagement',
      title: 'Platform Engagement',
      description: 'Your activity and platform highlights',
      content: (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900 mb-2">Welcome back! Here's what's happening on Platforma</div>
          <div className="text-sm text-gray-700">
            <strong>15,634 items</strong> distributed this month across <strong>24 oblasts</strong>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-blue-600">• New organizations in Kyiv Oblast</div>
            <div className="text-xs text-blue-600">• Medical supplies trending in Lviv</div>
            <div className="text-xs text-blue-600">• Winter clothing requests increasing</div>
          </div>
        </div>
      ),
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      bgColor: 'bg-green-50'
    },
    {
      id: 'discovery-center',
      title: 'Discovery Center',
      description: 'Explore trending content and featured organizations',
      content: (
        <div className="space-y-3">
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Featured This Week</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Kyiv Emergency Response Foundation</span>
              <div className="w-4 h-4 text-blue-500">✓</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Trending Content</div>
            <div className="text-xs text-gray-600">Most followed: Winter clothing wishlists</div>
            <div className="text-xs text-gray-600">Active: MedSupply Ukraine catalog</div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900 mb-1">Community Highlights</div>
            <div className="text-xs text-gray-600">142 requests fulfilled in Kharkiv Oblast this week</div>
          </div>
        </div>
      ),
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      bgColor: 'bg-purple-50'
    },
    {
      id: 'quick-actions',
      title: 'Quick Actions',
      description: 'Get started with platform features',
      content: (
        <div className="space-y-3">
          <button className="w-full py-3 px-4 bg-yellow-400 text-slate-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
            Choose My Role
          </button>
          <div className="space-y-2">
            <button className="w-full py-2 px-4 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Update Profile
            </button>
            <button className="w-full py-2 px-4 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Browse New Catalogs
            </button>
            <button className="w-full py-2 px-4 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Find Organizations
            </button>
          </div>
        </div>
      ),
      icon: <UserPlus className="w-8 h-8 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
      isAction: true
    }
  ];

  const renderDashboard = () => {
    if (!isAuthenticated) {
      return <HomeDashboard />;
    }

    if (currentOrganization) {
      if (currentOrganization.type === 'nonprofit') {
        return <NonprofitDashboard />;
      } else if (currentOrganization.type === 'supplier') {
        return <SupplierDashboard />;
      }
    }

    // Standard User Dashboard (when no organization is selected)
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Your personalized view of the Platforma humanitarian aid network</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {standardUserCards.map(card => (
            <div 
              key={card.id} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.bgColor}`}>
                  {card.icon}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                
                <div className="mt-4">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Role-specific enhanced dashboards would appear here based on currentRole */}
        {currentRole === 'donor' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Donor Activities</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Donation Summary</h3>
                <p className="text-sm text-gray-700">18 in-kind items donated this month</p>
                <p className="text-sm text-gray-700">₴4,500 financial contributions</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Recent Impact</h3>
                <p className="text-sm text-gray-700">Last delivery: Medical supplies to Kharkiv (Nov 15)</p>
                <p className="text-sm text-gray-700">Geographic reach: 5 oblasts</p>
              </div>
            </div>
          </div>
        )}

        {currentRole === 'recipient' && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recipient Activities</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Active Requests</h3>
                <p className="text-sm text-gray-700">4 formal requests to nonprofits</p>
                <p className="text-sm text-gray-700">2 pending, 1 approved, 1 in transit</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Wishlist Summary</h3>
                <p className="text-sm text-gray-700">Public wishlist: 12 items, 3 priority items</p>
                <p className="text-sm text-gray-700">Last updated Nov 10</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6">
      {renderDashboard()}
    </div>
  );
};