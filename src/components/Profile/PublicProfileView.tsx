import React from 'react';
import { MapPin, Users, Calendar, ExternalLink, Heart, Share2, MessageCircle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface PublicProfileViewProps {
  profileId: string;
}

export const PublicProfileView: React.FC<PublicProfileViewProps> = ({ profileId }) => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  // Mock profile data based on profileId
  const profileData = {
    name: 'Oleksandr Petrenko',
    location: 'Kyiv, Ukraine',
    role: 'Donor',
    bio: 'Humanitarian aid donor supporting medical initiatives across Ukraine. Passionate about making a difference in communities affected by conflict.',
    joinDate: 'March 2023',
    followers: 45,
    following: 23,
    verified: true,
    socialLinks: {
      facebook: 'https://facebook.com/oleksandr.p',
      twitter: 'https://twitter.com/oleksandr_p',
      linkedin: 'https://linkedin.com/in/oleksandr-petrenko',
      telegram: '@oleksandr_p'
    },
    showDonationsButton: true,
    recentActivity: [
      { type: 'donation', description: 'Donated medical supplies to Kharkiv Hospital', date: '2 days ago' },
      { type: 'follow', description: 'Started following MedSupply Ukraine', date: '1 week ago' },
      { type: 'share', description: 'Shared Emergency Medical Center wishlist', date: '2 weeks ago' }
    ]
  };

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
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div 
        style={gradientStyle}
        className={`rounded-xl p-8 border ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
              <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {profileData.name.charAt(0)}
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.name}
                </h1>
                {profileData.verified && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <span className={`px-3 py-1 text-sm rounded-full ${getRoleBadgeColor(profileData.role)}`}>
                  {profileData.role}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    {profileData.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                    Joined {profileData.joinDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    {profileData.followers} followers
                  </span>
                </div>
                <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>•</span>
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                  {profileData.following} following
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Follow
            </button>
            <button className={`px-4 py-2 rounded-lg border transition-colors ${
              theme === 'dark'
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <MessageCircle className="w-4 h-4" />
            </button>
            <button className={`px-4 py-2 rounded-lg border transition-colors ${
              theme === 'dark'
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bio and Social Links */}
      <div className="grid grid-cols-2 gap-6">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About
          </h3>
          <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
            {profileData.bio}
          </p>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Connect
          </h3>
          <div className="space-y-2">
            {Object.entries(profileData.socialLinks).map(([platform, url]) => (
              url && (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 text-sm hover:text-blue-600 transition-colors ${
                    theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="capitalize">{platform}</span>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {profileData.showDonationsButton && (
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Humanitarian Contributions
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                View donation history and impact metrics
              </p>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-medium transition-colors">
              View My Donations
            </button>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div 
        style={gradientStyle}
        className={`rounded-xl p-6 border ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
        }`}
      >
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h3>
        <div className="space-y-3">
          {profileData.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'donation' ? 'bg-green-500' :
                activity.type === 'follow' ? 'bg-blue-500' : 'bg-yellow-500'
              }`} />
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
    </div>
  );
};