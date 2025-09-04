import React, { useState } from 'react';
import { Heart, MapPin, CheckCircle, Star, Users, Package } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const RecipientNonprofits: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const [selectedSector, setSelectedSector] = useState('all');

  const favoriteNonprofits = [
    {
      id: '1',
      name: 'Ukrainian Red Cross',
      location: 'Kyiv, Ukraine',
      sector: 'Emergency Response',
      verified: true,
      rating: 4.9,
      description: 'Leading humanitarian organization providing emergency aid across Ukraine',
      supportProvided: 'Medical supplies, emergency kits, winter clothing',
      lastInteraction: '2024-01-15',
      totalSupport: '€2,450',
      isFavorite: true
    },
    {
      id: '2',
      name: 'Médecins Sans Frontières Ukraine',
      location: 'Multiple Oblasts',
      sector: 'Healthcare',
      verified: true,
      rating: 4.8,
      description: 'International medical humanitarian organization delivering critical healthcare',
      supportProvided: 'Medical equipment, surgical supplies, pharmaceuticals',
      lastInteraction: '2024-01-12',
      totalSupport: '€1,890',
      isFavorite: true
    },
    {
      id: '3',
      name: 'UNICEF Ukraine',
      location: 'Kyiv, Ukraine',
      sector: 'Children & Education',
      verified: true,
      rating: 4.7,
      description: 'UN agency focused on children\'s rights and humanitarian aid',
      supportProvided: 'Educational materials, water purification, child protection',
      lastInteraction: '2024-01-08',
      totalSupport: '€1,234',
      isFavorite: true
    },
    {
      id: '4',
      name: 'Caritas Ukraine',
      location: 'Lviv, Ukraine',
      sector: 'Food Security',
      verified: true,
      rating: 4.6,
      description: 'Catholic charity providing humanitarian aid and social services',
      supportProvided: 'Food packages, hygiene kits, shelter support',
      lastInteraction: '2024-01-05',
      totalSupport: '€987',
      isFavorite: false
    },
    {
      id: '5',
      name: 'World Food Programme Ukraine',
      location: 'Multiple Locations',
      sector: 'Food Security',
      verified: true,
      rating: 4.8,
      description: 'UN agency fighting hunger and providing food security assistance',
      supportProvided: 'Food distributions, nutrition programs, emergency meals',
      lastInteraction: '2024-01-03',
      totalSupport: '€1,567',
      isFavorite: true
    }
  ];

  const sectors = ['all', 'Emergency Response', 'Healthcare', 'Children & Education', 'Food Security'];

  const filteredNonprofits = favoriteNonprofits.filter(org => 
    selectedSector === 'all' || org.sector === selectedSector
  );

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Children & Education':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Emergency Response':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Food Security':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Favorite Nonprofits
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Organizations that have provided support and assistance
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {favoriteNonprofits.filter(org => org.isFavorite).length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Favorites
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Package className="w-5 h-5 text-blue-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {favoriteNonprofits.length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Partners
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                €8,128
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Filter */}
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Filter by sector:
        </span>
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className={`px-4 py-2 rounded-lg border ${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-600 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector === 'all' ? 'All Sectors' : sector}
            </option>
          ))}
        </select>
      </div>

      {/* Nonprofits List */}
      <div className="space-y-4">
        {filteredNonprofits.map((org) => (
          <div 
            key={org.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {org.name}
                  </h3>
                  {org.verified && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                  {org.isFavorite && (
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  )}
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      {org.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {org.location}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getSectorColor(org.sector)}`}>
                    {org.sector}
                  </span>
                </div>
                <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {org.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Support Provided: 
                    </span>
                    <span className={`text-sm ml-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                      {org.supportProvided}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      Last interaction: {org.lastInteraction}
                    </span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                      Total support: {org.totalSupport}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}>
                Contact Organization
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                {org.isFavorite ? (
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                ) : (
                  <Heart className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};