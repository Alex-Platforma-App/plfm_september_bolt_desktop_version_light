import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink, Edit, Users, Heart, Gift, Settings } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const MyPublicProfile: React.FC = () => {
  const { theme } = useTheme();
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  // Mock user data - this would come from context/API in real app
  const userData = {
    id: 'oleksandr-p-kyiv',
    name: 'Oleksandr Petrenko',
    username: '@oleksandr_p',
    bio: 'Humanitarian aid donor supporting medical initiatives across Ukraine. Passionate about making a difference in communities affected by conflict. 🇺🇦 #HumanitarianAid',
    location: 'Kyiv, Ukraine',
    joinDate: 'March 2023',
    verified: true,
    profileImage: null, // Would be actual image URL
    followers: 156,
    following: 89,
    role: 'Donor',
    settings: {
      showDonationsButton: true,
      showWishlistButton: false,
      isPublic: true
    },
    socialLinks: {
      facebook: 'https://facebook.com/oleksandr.p',
      twitter: 'https://twitter.com/oleksandr_p',
      linkedin: 'https://linkedin.com/in/oleksandr-petrenko',
      telegram: '@oleksandr_p'
    }
  };

  const followers = [
    { id: '1', name: 'Yana Kovalenko', username: '@yana_k', role: 'Nonprofit Admin', verified: true },
    { id: '2', name: 'Dmitri Shevchenko', username: '@dmitri_s', role: 'Supplier', verified: true },
    { id: '3', name: 'Lesia Marchenko', username: '@lesia_m', role: 'Recipient', verified: false },
    { id: '4', name: 'Viktor Romanov', username: '@viktor_r', role: 'Volunteer', verified: true },
    { id: '5', name: 'Ukrainian Red Cross', username: '@redcross_ua', role: 'Organization', verified: true }
  ];

  const following = [
    { id: '1', name: 'MedSupply Ukraine', username: '@medsupply_ua', role: 'Organization', verified: true },
    { id: '2', name: 'Caritas Ukraine', username: '@caritas_ua', role: 'Organization', verified: true },
    { id: '3', name: 'UNICEF Ukraine', username: '@unicef_ua', role: 'Organization', verified: true }
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Donor':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Nonprofit Admin':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Supplier':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Recipient':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Organization':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleEditProfile = () => {
    // This would navigate to edit profile page or open modal
    console.log('Edit profile clicked');
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
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className={`rounded-xl border p-8 ${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200'
      }`}>
        {/* Top Section with Edit Button */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-start space-x-6">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {userData.profileImage ? (
                <img src={userData.profileImage} alt={userData.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                userData.name.charAt(0)
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {userData.name}
                </h1>
                {userData.verified && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
                <span className={`px-3 py-1 text-sm rounded-full ${getRoleBadgeColor(userData.role)}`}>
                  {userData.role}
                </span>
              </div>
              
              <p className={`text-lg mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                {userData.username}
              </p>

              <p className={`text-base leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                {userData.bio}
              </p>

              {/* Location and Join Date */}
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

          {/* Edit Profile Button */}
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
        <div className="flex items-center space-x-6 mb-6">
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

        {/* Role-Specific Buttons */}
        <div className="flex space-x-3 mb-6">
          {userData.settings.showDonationsButton && userData.role === 'Donor' && (
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2">
              <Gift className="w-4 h-4" />
              <span>View My Donations</span>
            </button>
          )}
          {userData.settings.showWishlistButton && userData.role === 'Recipient' && (
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>View My Wishlist</span>
            </button>
          )}
        </div>

        {/* Social Links */}
        {Object.entries(userData.socialLinks).some(([_, url]) => url) && (
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Connect
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

      {/* Recent Activity Section */}
      <div className={`mt-6 rounded-xl border p-6 ${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Donated medical supplies to Kharkiv Regional Hospital
            </span>
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              2 days ago
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Started following MedSupply Ukraine
            </span>
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              1 week ago
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
              Shared Emergency Medical Center wishlist
            </span>
            <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              2 weeks ago
            </span>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showFollowersModal && <FollowersModal />}
      {showFollowingModal && <FollowingModal />}
    </div>
  );
};