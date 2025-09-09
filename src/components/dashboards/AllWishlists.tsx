import React, { useState } from 'react';
import { MapPin, Filter, Heart, AlertTriangle, List, Calendar, Eye, Share2, Clock } from 'lucide-react';

export const AllWishlists: React.FC = () => {
  const [selectedOblast, setSelectedOblast] = useState('all');

  const oblasts = ['all', 'Kharkiv Oblast', 'Lviv Oblast', 'Dnipro Oblast', 'Poltava Oblast', 'Odesa Oblast', 'Zaporizhzhia Oblast', 'Chernivtsi Oblast'];

  const wishlists = [
    {
      id: '1',
      name: 'Emergency Medical Center - Kharkiv',
      location: 'Kharkiv Oblast',
      type: 'Medical Facility',
      items: 18,
      urgent: 7,
      needs: 'Urgent medical supplies, surgical equipment, emergency medications',
      lastUpdated: '3 hours ago',
      description: 'Regional medical center serving displaced populations and emergency cases'
    },
    {
      id: '2',
      name: 'School #45 Lviv',
      location: 'Lviv Oblast',
      type: 'Educational Institution',
      items: 12,
      urgent: 2,
      needs: 'Educational materials for displaced children, learning supplies, books',
      lastUpdated: '1 day ago',
      description: 'Primary school accommodating 200+ displaced children from eastern regions'
    },
    {
      id: '3',
      name: 'Community Center Dnipro',
      location: 'Dnipro Oblast',
      type: 'Community Center',
      items: 15,
      urgent: 4,
      needs: 'Winter clothing for families, thermal blankets, heating equipment',
      lastUpdated: '2 days ago',
      description: 'Community shelter housing 150 displaced families and individuals'
    },
    {
      id: '4',
      name: 'Elderly Care Facility - Poltava',
      location: 'Poltava Oblast',
      type: 'Care Facility',
      items: 9,
      urgent: 3,
      needs: 'Hygiene kits and medication, mobility aids, specialized care items',
      lastUpdated: '4 hours ago',
      description: 'Residential care facility for elderly displaced persons requiring special care'
    },
    {
      id: '5',
      name: 'Volunteer Hub Odesa',
      location: 'Odesa Oblast',
      type: 'Volunteer Center',
      items: 22,
      urgent: 6,
      needs: 'Emergency food packages, water purification, distribution supplies',
      lastUpdated: '6 hours ago',
      description: 'Central coordination hub for humanitarian aid distribution across the region'
    },
    {
      id: '6',
      name: 'Children\'s Shelter Chernivtsi',
      location: 'Chernivtsi Oblast',
      type: 'Children\'s Facility',
      items: 14,
      urgent: 1,
      needs: 'Toys and learning supplies, children\'s clothing, educational games',
      lastUpdated: '1 week ago',
      description: 'Temporary shelter for unaccompanied minors and children separated from families'
    },
    {
      id: '7',
      name: 'Veterans Support - Zaporizhzhia',
      location: 'Zaporizhzhia Oblast',
      type: 'Support Center',
      items: 11,
      urgent: 5,
      needs: 'Medical equipment and clothing, rehabilitation supplies, mobility aids',
      lastUpdated: '2 weeks ago',
      description: 'Support center providing services to wounded veterans and their families'
    }
  ];

  const filteredWishlists = wishlists.filter(wishlist => {
    return selectedOblast === 'all' || wishlist.location === selectedOblast;
  });

  const getUrgencyColor = (urgent: number) => {
    if (urgent >= 5) return 'text-red-600 bg-red-50';
    if (urgent >= 3) return 'text-orange-600 bg-orange-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Medical Facility':
        return 'bg-red-100 text-red-700';
      case 'Educational Institution':
        return 'bg-blue-100 text-blue-700';
      case 'Community Center':
        return 'bg-green-100 text-green-700';
      case 'Care Facility':
        return 'bg-purple-100 text-purple-700';
      case 'Volunteer Center':
        return 'bg-orange-100 text-orange-700';
      case 'Children\'s Facility':
        return 'bg-pink-100 text-pink-700';
      case 'Support Center':
        return 'bg-indigo-100 text-indigo-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          All Wishlists
        </h2>
        <p className="text-gray-600">
          Public recipient wishlists across Ukrainian regions - discover urgent needs and priority requests
        </p>
      </div>

      {/* Filter and Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedOblast}
            onChange={(e) => setSelectedOblast(e.target.value)}
            className="px-4 py-2 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {oblasts.map((oblast) => (
              <option key={oblast} value={oblast}>
                {oblast === 'all' ? 'All Oblasts' : oblast}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>High Priority</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Medium Priority</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Standard</span>
          </div>
        </div>
      </div>

      {/* Wishlists Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredWishlists.map((wishlist) => (
          <div 
            key={wishlist.id} 
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {wishlist.name}
                  </h3>
                  {wishlist.urgent > 0 && (
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(wishlist.urgent)}`}>
                      <AlertTriangle className="w-3 h-3" />
                      <span>{wishlist.urgent} urgent</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {wishlist.location}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(wishlist.type)}`}>
                    {wishlist.type}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  {wishlist.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <List className="w-4 h-4" />
                <span>{wishlist.items} items needed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Updated {wishlist.lastUpdated}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Priority needs:</span> {wishlist.needs}
              </p>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                <div className="flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Wishlist</span>
                </div>
              </button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map Interface Placeholder */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Discovery</h3>
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Interactive map view coming soon</p>
            <p className="text-sm text-gray-500">Explore wishlists by geographic location</p>
          </div>
        </div>
      </div>
    </div>
  );
};