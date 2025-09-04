import React from 'react';
import { Users, Package, Globe, TrendingUp, Heart, Shield } from 'lucide-react';
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

      {/* Platform Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <OverviewCard
          title="Active Organizations"
          value="247"
          subtitle="Nonprofits & Suppliers"
          icon={<Users className="w-6 h-6" />}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <OverviewCard
          title="Available Products"
          value="15,342"
          subtitle="Across all catalogs"
          icon={<Package className="w-6 h-6" />}
          color="green"
          trend={{ value: 8, isPositive: true }}
        />
        <OverviewCard
          title="Global Reach"
          value="23"
          subtitle="Countries served"
          icon={<Globe className="w-6 h-6" />}
          color="purple"
        />
      </div>

      {/* Featured Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-semibold text-slate-900">Urgent Needs</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-medium text-slate-900">Kyiv Emergency Medical Supplies</h4>
              <p className="text-sm text-slate-600">Critical trauma equipment needed for 3 hospitals</p>
              <p className="text-xs text-slate-500">Updated 2 hours ago</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h4 className="font-medium text-slate-900">Lviv Children's Winter Clothing</h4>
              <p className="text-sm text-slate-600">Warm clothing for 200+ displaced children</p>
              <p className="text-xs text-slate-500">Updated 4 hours ago</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-slate-900">Kharkiv Educational Materials</h4>
              <p className="text-sm text-slate-600">School supplies for rebuilt classrooms</p>
              <p className="text-xs text-slate-500">Updated 1 day ago</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-900">Platform Impact</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Aid Coordinated This Month</span>
              <span className="font-semibold text-slate-900">$247,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">People Helped</span>
              <span className="font-semibold text-slate-900">2,847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Delivery Success Rate</span>
              <span className="font-semibold text-green-600">97.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Response Time</span>
              <span className="font-semibold text-slate-900">&lt; 24 hours</span>
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