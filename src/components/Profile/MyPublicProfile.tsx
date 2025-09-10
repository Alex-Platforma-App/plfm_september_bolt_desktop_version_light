import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink, Edit, Users, Heart, MessageCircle, Share2, Stethoscope, Shield, Truck, Activity } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const MyPublicProfile: React.FC = () => {
  const { theme } = useTheme();
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  // Dr. Oksana Marchenko - Medical Evacuation Specialist Profile
  const userData = {
    id: 'dr-oksana-marchenko-kharkiv',
    name: 'Dr. Oksana Marchenko',
    username: '@dr_oksana_m',
    bio: 'Emergency medic specializing in battlefield medical evacuation. Working with mobile medical units across eastern Ukraine. Regularly coordinating medical supply deliveries for frontline healthcare. 🚑🇺🇦',
    location: 'Kharkiv, Ukraine',
    joinDate: 'March 2022',
    verified: true,
    medicalVerified: true,
    profileImage: null, // Would be professional medical photo
    followers: 234,
    following: 89,
    role: 'Recipient',
    specialization: 'Medical Evacuation Specialist',
    settings: {
      showWishlistButton: true,
      showDonationsButton: false,
      isPublic: true
    },
    socialLinks: {
      telegram: '@dr_oksana_medical',
      linkedin: 'https://linkedin.com/in/dr-oksana-marchenko',
      facebook: 'https://facebook.com/dr.oksana.marchenko'
    }
  };

  // Medical professionals, organizations, and donors who follow her
  const followers = [
    { id: '1', name: 'Ukrainian Red Cross', username: '@redcross_ua', role: 'Organization', verified: true },
    { id: '2', name: 'Dr. Andriy Kovalenko', username: '@dr_andriy_k', role: 'Medical Professional', verified: true },
    { id: '3', name: 'MedSupply Ukraine', username: '@medsupply_ua', role: 'Supplier', verified: true },
    { id: '4', name: 'Oleksandr P.', username: '@oleksandr_p', role: 'Donor', verified: false },
    { id: '5', name: 'Kharkiv Medical Center', username: '@kharkiv_medical', role: 'Organization', verified: true },
    { id: '6', name: 'Dr. Lesia Bondarenko', username: '@dr_lesia_b', role: 'Medical Professional', verified: true },
    { id: '7', name: 'Emergency Aid International', username: '@emergency_aid_intl', role: 'Organization', verified: true },
    { id: '8', name: 'Viktor R.', username: '@viktor_volunteer', role: 'Volunteer', verified: false }
  ];

  // Medical organizations and suppliers she follows
  const following = [
    { id: '1', name: 'Médecins Sans Frontières', username: '@msf_ukraine', role: 'Organization', verified: true },
    { id: '2', name: 'WHO Ukraine', username: '@who_ukraine', role: 'Organization', verified: true },
    { id: '3', name: 'MedSupply Europe', username: '@medsupply_europe', role: 'Supplier', verified: true },
    { id: '4', name: 'Ukrainian Medical Association', username: '@uma_ukraine', role: 'Organization', verified: true },
    { id: '5', name: 'Emergency Medical Services', username: '@ems_ukraine', role: 'Organization', verified: true }
  ];

  // Recent professional activity
  const recentActivity = [
    { type: 'wishlist', description: 'Updated medical supply wishlist - urgent need for trauma kits', date: '6 hours ago' },
    { type: 'request', description: 'Submitted request for portable defibrillators to Ukrainian Red Cross', date: '2 days ago' },
    { type: 'delivery', description: 'Confirmed receipt of emergency medical supplies from MedSupply Europe', date: '4 days ago' },
    { type: 'follow', description: 'Started following Emergency Medical Services Ukraine', date: '1 week ago' }
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Medical Professional':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Organization':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Supplier':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Donor':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Volunteer':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'wishlist':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'request':
        return <Activity className="w-4 h-4 text-blue-500" />;
      case 'delivery':
        return <Truck className="w-4 h-4 text-green-500" />;
      case 'follow':
        return <Users className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const FollowersModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`w-full max-w-md mx-4 rounded-xl shadow-xl ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-600">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Followers
          </h3>
          <button
            onClick={() => setShowFollowersModal(false)}
            className={`text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200`}
          >
            ✕
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto p-4">
          {followers.map((follower) => (
            <div key={follower.id} className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>
                    {follower.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {follower.name}
                    </span>
                    {follower.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    {follower.username}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getRoleBadgeColor(follower.role)}`}>
                {follower.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FollowingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`w-full max-w-md mx-4 rounded-xl shadow-xl ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-600">
          <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Following
          </h3>
          <button
            onClick={() => setShowFollowingModal(false)}
            className={`text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200`}
          >
            ✕
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto p-4">
          {following.map((followed) => (
            <div key={followed.id} className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                    {followed.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {followed.name}
                    </span>
                    {followed.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    {followed.username}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getRoleBadgeColor(followed.role)}`}>
                {followed.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className={`rounded-xl p-8 border ${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-red-200 dark:border-red-800">
              {userData.profileImage ? (
                <img src={userData.profileImage} alt={userData.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <Stethoscope className="w-12 h-12" />
              )}
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {userData.name}
                </h1>
                {userData.verified && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                {userData.medicalVerified && (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                )}
                <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  {userData.role}
                </span>
              </div>
              
              <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                {userData.username}
              </p>

              <p className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                {userData.specialization}
              </p>

              <p className={`text-base leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                {userData.bio}
              </p>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    {userData.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    Joined {userData.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleEditProfile}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full border font-medium transition-colors ${
              theme === 'dark'
                ? 'border-slate-600 text-slate-300 hover:bg-slate-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex items-center space-x-6 mt-6 mb-6">
          <button
            onClick={() => setShowFollowingModal(true)}
            className={`hover:underline ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}
          >
            <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {userData.following}
            </span>{' '}
            Following
          </button>
          <button
            onClick={() => setShowFollowersModal(true)}
            className={`hover:underline ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}
          >
            <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {userData.followers}
            </span>{' '}
            Followers
          </button>
        </div>

        {/* Primary CTA - View My Wishlist */}
        {userData.settings.showWishlistButton && (
          <div className="mb-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center space-x-2 text-lg">
              <Heart className="w-5 h-5" />
              <span>View My Medical Supply Wishlist</span>
            </button>
          </div>
        )}

        {/* Social Links */}
        {Object.entries(userData.socialLinks).some(([_, url]) => url) && (
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Professional Contact
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(userData.socialLinks).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-colors ${
                      theme === 'dark'
                        ? 'border-slate-600 text-slate-300 hover:bg-slate-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="capitalize">{platform}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recent Professional Activity */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recent Medical Supply Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              {getActivityIcon(activity.type)}
              <div className="flex-1">
                <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {activity.description}
                </span>
                <span className={`text-xs ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
                  {activity.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Context */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Medical Professional Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Specialization
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Emergency Medical Evacuation, Trauma Care, Mobile Medical Units
            </p>
          </div>
          <div>
            <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Service Area
            </h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Eastern Ukraine, Kharkiv Oblast, Frontline Medical Support
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showFollowersModal && <FollowersModal />}
      {showFollowingModal && <FollowingModal />}
    </div>
  );
};