import React, { useState } from 'react';
import { MapPin, Filter, Heart, AlertTriangle, List } from 'lucide-react';

export const AllWishlists: React.FC = () => {
  const [selectedOblast, setSelectedOblast] = useState('all');

  const oblasts = ['all', 'Kyiv Oblast', 'Lviv Oblast', 'Kharkiv Oblast', 'Dnipro Oblast', 'Odesa Oblast', 'Zaporizhzhia Oblast'];

  const mockWishlists = [
    {
      id: '1',
      name: 'Kyiv Children Hospital',
      location: 'Kyiv Oblast',
      type: 'Medical Facility',
      items: 15,
      urgent: 5,
      needs: 'Medical supplies, surgical equipment, generators',
      lastUpdated: '2 days ago'
    },
    {
      id: '2',
      name: 'Lviv Evacuation Center',
      location: 'Lviv Oblast',
      type: 'Shelter',
      items: 12,
      urgent: 3,
      needs: 'Winter clothing, blankets, hygiene kits',
      lastUpdated: '1 day ago'
    },
    {
      id: '3',
      name: 'Kharkiv Community School',
      location: 'Kharkiv Oblast',
      type: 'Education',
      items: 8,
      urgent: 2,
      needs: 'Educational materials, heating equipment',
      lastUpdated: '3 hours ago'
    },
    {
      id: '4',
      name: 'Mariupol Relief Center',
      location: 'Donetsk Oblast',
      type: 'Community Center',
      items: 18,
      urgent: 7,
      needs: 'Food supplies, water purification, medical aid',
      lastUpdated: '5 hours ago'
    },
    {
      id: '5',
      name: 'Odesa Family Shelter',
      location: 'Odesa Oblast',
      type: 'Shelter',
      items: 10,
      urgent: 1,
      needs: 'Baby supplies, formula, diapers',
      lastUpdated: '1 day ago'
    },
    {
      id: '6',
      name: 'Zaporizhzhia Hospital',
      location: 'Zaporizhzhia Oblast',
      type: 'Medical Facility',
      items: 22,
      urgent: 9,
      needs: 'Critical medical supplies, backup power',
      lastUpdated: '4 hours ago'
    }
  ];

  const filteredWishlists = mockWishlists.filter(wishlist => {
    return selectedOblast === 'all' || wishlist.location === selectedOblast;
  });

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          All Wishlists
        </h2>
        <p className="text-gray-600">
          Public recipient wishlists across Ukrainian regions
        </p>
      </div>

      {/* Filter */}
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

      {/* Wishlists Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredWishlists.map((wishlist) => (
          <div 
            key={wishlist.id} 
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">
                  {wishlist.name}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {wishlist.location}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                    {wishlist.type}
                  </span>
                </div>
              </div>
              {wishlist.urgent > 0 && (
                <div className="flex items-center space-x-1">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-500">
                    {wishlist.urgent} urgent
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-2">
                <List className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">
                  {wishlist.items} items
                </span>
              </div>
              <span className="text-xs text-gray-500">
                Updated {wishlist.lastUpdated}
              </span>
            </div>

            <p className="text-sm mb-4 text-gray-700">
              Priority needs: {wishlist.needs}
            </p>

            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                View Wishlist
              </button>
              <button className="px-4 py-2 rounded-lg border transition-colors border-gray-300 text-gray-700 hover:bg-gray-50">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};