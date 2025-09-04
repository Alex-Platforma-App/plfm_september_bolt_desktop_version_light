import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, Users, Building } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const Network: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  const cardStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const sectors = ['all', 'Healthcare', 'Education', 'Emergency Response', 'Food Security', 'Shelter', 'Logistics'];

  const networkOrganizations = [
    {
      id: '1',
      name: 'Ukrainian Red Cross',
      location: 'Kyiv, Ukraine',
      sector: 'Emergency Response',
      verified: true,
      description: 'Leading humanitarian organization providing emergency aid and disaster relief across Ukraine.',
      members: 2847,
      partnerships: 23
    },
    {
      id: '2',
      name: 'Médecins Sans Frontières Ukraine',
      location: 'Multiple Oblasts',
      sector: 'Healthcare',
      verified: true,
      description: 'International medical humanitarian organization delivering critical healthcare in conflict zones.',
      members: 1234,
      partnerships: 18
    },
    {
      id: '3',
      name: 'Caritas Ukraine',
      location: 'Lviv, Ukraine',
      sector: 'Food Security',
      verified: true,
      description: 'Catholic charity providing humanitarian aid, food security, and social services.',
      members: 892,
      partnerships: 15
    },
    {
      id: '4',
      name: 'Nova Ukraine',
      location: 'Palo Alto, USA & Kyiv, Ukraine',
      sector: 'Education',
      verified: true,
      description: 'Supporting Ukrainian education, healthcare, and humanitarian aid efforts.',
      members: 567,
      partnerships: 12
    },
    {
      id: '5',
      name: 'Razom',
      location: 'New York, USA & Ukraine',
      sector: 'Emergency Response',
      verified: true,
      description: 'Ukrainian-American organization focused on emergency response and civil society development.',
      members: 445,
      partnerships: 9
    },
    {
      id: '6',
      name: 'World Food Programme Ukraine',
      location: 'Kyiv, Ukraine',
      sector: 'Food Security',
      verified: true,
      description: 'UN agency fighting hunger and providing food assistance to vulnerable populations.',
      members: 1567,
      partnerships: 28
    }
  ];

  const filteredOrganizations = networkOrganizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || org.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Education':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Emergency Response':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Food Security':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Shelter':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Network
        </h2>
        <p className={`${
          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
        }`}>
          Connect with organizations in the humanitarian aid ecosystem
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-400'
          }`} />
          <input
            type="text"
            placeholder="Search organizations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
        
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

      {/* Organizations Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredOrganizations.map((org) => (
          <div 
            key={org.id} 
            style={cardStyle}
            className={`rounded-xl p-6 border ${
            theme === 'dark'
              ? 'border-slate-700'
              : 'border-gray-200'
          } hover:shadow-lg transition-shadow cursor-pointer`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {org.name}
                  </h3>
                  {org.verified && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {org.location}
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full ${getSectorColor(org.sector)}`}>
                {org.sector}
              </span>
            </div>

            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {org.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Users className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {org.members.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Building className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {org.partnerships} partnerships
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}>
                Connect
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};