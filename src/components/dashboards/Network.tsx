import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, Users, Building, Star, UserCheck, Award } from 'lucide-react';

export const Network: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewType, setViewType] = useState('organizations'); // 'organizations' or 'individuals'

  const filterOptions = ['all', 'Healthcare', 'Education', 'Emergency Response', 'Food Security', 'Shelter', 'Logistics'];

  const organizations = [
    {
      id: '1',
      name: 'Kyiv Emergency Response Foundation',
      location: 'Kyiv, Ukraine',
      sector: 'Healthcare',
      verified: true,
      description: 'Leading emergency response organization providing critical medical aid and disaster relief.',
      followers: 156,
      partnerships: 23,
      type: 'Nonprofit'
    },
    {
      id: '2',
      name: 'Lviv Medical Aid Network',
      location: 'Lviv, Ukraine',
      sector: 'Healthcare',
      verified: true,
      description: 'Medical aid network delivering healthcare services to displaced populations.',
      followers: 203,
      partnerships: 18,
      type: 'Nonprofit'
    },
    {
      id: '3',
      name: 'Kharkiv Children\'s Relief',
      location: 'Kharkiv, Ukraine',
      sector: 'Education',
      verified: true,
      description: 'Supporting displaced children with educational materials and psychological support.',
      followers: 89,
      partnerships: 15,
      type: 'Nonprofit'
    },
    {
      id: '4',
      name: 'Odesa Community Support',
      location: 'Odesa, Ukraine',
      sector: 'Emergency Response',
      verified: true,
      description: 'Community-based organization providing comprehensive humanitarian assistance.',
      followers: 145,
      partnerships: 12,
      type: 'Nonprofit'
    },
    {
      id: '5',
      name: 'MedSupply Ukraine',
      location: 'Kyiv, Ukraine',
      sector: 'Healthcare',
      verified: true,
      description: 'Medical equipment and pharmaceutical supplier serving humanitarian organizations.',
      followers: 67,
      partnerships: 9,
      type: 'Supplier'
    },
    {
      id: '6',
      name: 'Winter Gear Solutions',
      location: 'Lviv, Ukraine',
      sector: 'Emergency Response',
      verified: true,
      description: 'Specialized supplier of winter clothing and thermal protection equipment.',
      followers: 43,
      partnerships: 7,
      type: 'Supplier'
    }
  ];

  const individuals = [
    {
      id: '1',
      name: 'Oleksandr P.',
      location: 'Kyiv, Ukraine',
      role: 'Donor',
      badge: 'Major Donor',
      description: 'Active humanitarian donor supporting medical aid initiatives across Ukraine.',
      followers: 45,
      contributions: 23,
      verified: true
    },
    {
      id: '2',
      name: 'Yana K.',
      location: 'Lviv, Ukraine',
      role: 'Nonprofit Admin',
      badge: 'Organization Leader',
      description: 'Nonprofit administrator coordinating aid distribution in western Ukraine.',
      followers: 78,
      contributions: 156,
      verified: true
    },
    {
      id: '3',
      name: 'Dmitri S.',
      location: 'Kharkiv, Ukraine',
      role: 'Supplier',
      badge: 'Verified Supplier',
      description: 'Medical equipment supplier with extensive humanitarian sector experience.',
      followers: 32,
      contributions: 89,
      verified: true
    },
    {
      id: '4',
      name: 'Lesia M.',
      location: 'Odesa, Ukraine',
      role: 'Recipient',
      badge: 'Community Representative',
      description: 'Community representative coordinating aid requests for displaced families.',
      followers: 12,
      contributions: 34,
      verified: false
    },
    {
      id: '5',
      name: 'Viktor R.',
      location: 'Dnipro, Ukraine',
      role: 'Volunteer',
      badge: 'Active Volunteer',
      description: 'Volunteer coordinator managing logistics and distribution operations.',
      followers: 56,
      contributions: 67,
      verified: true
    },
    {
      id: '6',
      name: 'Natalia F.',
      location: 'Poltava, Ukraine',
      role: 'Coordinator',
      badge: 'Regional Coordinator',
      description: 'Regional coordinator overseeing humanitarian operations in central Ukraine.',
      followers: 34,
      contributions: 45,
      verified: true
    }
  ];

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || org.sector === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredIndividuals = individuals.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'Healthcare':
        return 'bg-red-100 text-red-700';
      case 'Education':
        return 'bg-blue-100 text-blue-700';
      case 'Emergency Response':
        return 'bg-orange-100 text-orange-700';
      case 'Food Security':
        return 'bg-green-100 text-green-700';
      case 'Shelter':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Donor':
        return 'bg-yellow-100 text-yellow-700';
      case 'Nonprofit Admin':
        return 'bg-blue-100 text-blue-700';
      case 'Supplier':
        return 'bg-green-100 text-green-700';
      case 'Recipient':
        return 'bg-purple-100 text-purple-700';
      case 'Volunteer':
        return 'bg-orange-100 text-orange-700';
      case 'Coordinator':
        return 'bg-indigo-100 text-indigo-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Network
        </h2>
        <p className="text-gray-600">
          Connect with organizations and individuals in the humanitarian aid ecosystem
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewType('organizations')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewType === 'organizations'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Organizations
          </button>
          <button
            onClick={() => setViewType('individuals')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewType === 'individuals'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Individuals
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${viewType}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {viewType === 'organizations' && (
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border bg-white border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {filterOptions.map((filter) => (
              <option key={filter} value={filter}>
                {filter === 'all' ? 'All Sectors' : filter}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Organizations Grid */}
      {viewType === 'organizations' && (
        <div className="grid grid-cols-2 gap-6">
          {filteredOrganizations.map((org) => (
            <div 
              key={org.id} 
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">
                      {org.name}
                    </h3>
                    {org.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {org.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`px-3 py-1 text-xs rounded-full ${getSectorColor(org.sector)}`}>
                    {org.sector}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                    {org.type}
                  </span>
                </div>
              </div>

              <p className="text-sm mb-4 text-gray-700">
                {org.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {org.followers} followers
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {org.partnerships} partnerships
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                  Connect
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Individuals Grid */}
      {viewType === 'individuals' && (
        <div className="grid grid-cols-2 gap-6">
          {filteredIndividuals.map((person) => (
            <div 
              key={person.id} 
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">
                      {person.name}
                    </h3>
                    {person.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {person.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`px-3 py-1 text-xs rounded-full ${getRoleBadgeColor(person.role)}`}>
                    {person.role}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-gray-600">{person.badge}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm mb-4 text-gray-700">
                {person.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {person.followers} followers
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {person.contributions} contributions
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 py-2 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                  Follow
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};