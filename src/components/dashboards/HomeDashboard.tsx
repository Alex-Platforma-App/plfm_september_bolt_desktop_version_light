import React from 'react';
import { Users, Package, Globe, TrendingUp, Heart, Shield, CheckCircle, MapPin, Activity, Eye } from 'lucide-react';
import { OverviewCard } from '../ui/OverviewCard';

export const HomeDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/Group 1321314725 copy.png" 
            alt="Platforma Logo" 
            className="h-16 w-auto mb-2 hover:opacity-80 transition-opacity"
          />
          <p className="text-slate-600">Humanitarian Logistics Platform</p>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Transform humanitarian logistics through technology, making aid delivery transparent, 
          efficient, and effective across Ukraine and beyond.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-yellow-400 text-slate-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
            Explore Catalogs
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            View Wishlists
          </button>
        </div>
      </div>

      {/* Platform Metrics */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard
            title="Requests Fulfilled"
            value="287"
            subtitle="recipient requests completed this month"
            icon={<CheckCircle className="w-6 h-6" />}
            color="green"
            trend={{ value: 15, isPositive: true }}
          />
          <OverviewCard
            title="Items Listed"
            value="15,634"
            subtitle="items available across all catalogs"
            icon={<Package className="w-6 h-6" />}
            color="blue"
            trend={{ value: 8, isPositive: true }}
          />
          <OverviewCard
            title="Active Organizations"
            value="231"
            subtitle="142 verified nonprofits, 89 suppliers"
            icon={<Users className="w-6 h-6" />}
            color="purple"
            trend={{ value: 12, isPositive: true }}
          />
          <OverviewCard
            title="Platform Users"
            value="1,247"
            subtitle="registered users this quarter"
            icon={<Globe className="w-6 h-6" />}
            color="orange"
            trend={{ value: 22, isPositive: true }}
          />
        </div>
      </div>

      {/* Activity Intelligence */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Activity Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCard
            title="Recent Fulfillments"
            value="12"
            subtitle="requests marked as delivered today"
            icon={<TrendingUp className="w-6 h-6" />}
            color="green"
          />
          <OverviewCard
            title="New Requests"
            value="23"
            subtitle="new items added to wishlists this week"
            icon={<Heart className="w-6 h-6" />}
            color="red"
          />
          <OverviewCard
            title="New Catalog Items"
            value="156"
            subtitle="new items added to catalogs this week"
            icon={<Package className="w-6 h-6" />}
            color="blue"
          />
          <OverviewCard
            title="Geographic Activity"
            value="18"
            subtitle="active deliveries in oblasts"
            icon={<MapPin className="w-6 h-6" />}
            color="purple"
          />
        </div>
      </div>

      {/* Discovery Features */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Discovery Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Activity className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Most Requested Items</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Top priority items across all wishlists</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• Medical supplies</div>
              <div className="text-sm text-gray-700">• Winter clothing</div>
              <div className="text-sm text-gray-700">• Hygiene kits</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Active Organizations</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Organizations with recent catalog updates</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• 45 updated this week</div>
              <div className="text-sm text-gray-700">• 12 new organizations</div>
              <div className="text-sm text-gray-700">• 98% verified status</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-gray-900">Recent Wishlist Updates</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">New public wishlists added</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• 34 new wishlists</div>
              <div className="text-sm text-gray-700">• 156 items requested</div>
              <div className="text-sm text-gray-700">• 8 urgent priorities</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Package className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Available Categories</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Top catalog categories with item counts</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• Medical: 4,567 items</div>
              <div className="text-sm text-gray-700">• Emergency: 2,890 items</div>
              <div className="text-sm text-gray-700">• Food: 1,234 items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Security and Trust */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-slate-900">Trusted Platform</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-sm text-slate-600">Verified Organizations</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">€12.4M</div>
            <p className="text-sm text-slate-600">Aid Tracked Transparently</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-sm text-slate-600">Real-time Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
};