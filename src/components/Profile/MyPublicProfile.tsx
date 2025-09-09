import React, { useState } from 'react';
import { Camera, Copy, QrCode, Share2, Users, Eye, EyeOff, Save, Upload, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const MyPublicProfile: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('edit'); // 'edit', 'followers', 'following'
  
  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  // Profile form state
  const [profileData, setProfileData] = useState({
    name: 'Oleksandr Petrenko',
    location: 'Kyiv',
    bio: 'Humanitarian aid donor supporting medical initiatives across Ukraine. Passionate about making a difference in communities affected by conflict.',
    profileImage: null as File | null,
    socialLinks: {
      facebook: 'https://facebook.com/oleksandr.p',
      twitter: 'https://twitter.com/oleksandr_p',
      instagram: '',
      linkedin: 'https://linkedin.com/in/oleksandr-petrenko',
      telegram: '@oleksandr_p'
    },
    isPublic: true,
    showWishlistButton: true,
    showDonationsButton: true
  });

  const [bioCharCount, setBioCharCount] = useState(profileData.bio.length);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const ukrainianCities = [
    'Kyiv', 'Lviv', 'Kharkiv', 'Odesa', 'Dnipro', 'Poltava', 'Chernivtsi', 
    'Zaporizhzhia', 'Vinnytsia', 'Cherkasy', 'Sumy', 'Zhytomyr'
  ];

  // Mock followers data
  const followers = [
    { id: '1', name: 'Yana Kovalenko', location: 'Lviv', role: 'Nonprofit Admin', followers: 78, verified: true },
    { id: '2', name: 'Dmitri Shevchenko', location: 'Kharkiv', role: 'Supplier', followers: 32, verified: true },
    { id: '3', name: 'Lesia Marchenko', location: 'Odesa', role: 'Recipient', followers: 12, verified: false },
    { id: '4', name: 'Viktor Romanov', location: 'Dnipro', role: 'Volunteer', followers: 56, verified: true },
    { id: '5', name: 'Natalia Fedorenko', location: 'Poltava', role: 'Coordinator', followers: 34, verified: true },
    { id: '6', name: 'Ukrainian Red Cross', location: 'Kyiv', role: 'Organization', followers: 234, verified: true },
    { id: '7', name: 'Andriy Bondarenko', location: 'Chernivtsi', role: 'Donor', followers: 23, verified: false },
    { id: '8', name: 'Maryna Tkachenko', location: 'Zaporizhzhia', role: 'Recipient', followers: 8, verified: false }
  ];

  const following = [
    { id: '1', name: 'MedSupply Ukraine', location: 'Kyiv', role: 'Organization', followers: 156, verified: true },
    { id: '2', name: 'Caritas Ukraine', location: 'Lviv', role: 'Organization', followers: 89, verified: true },
    { id: '3', name: 'Ihor Petrenko', location: 'Kharkiv', role: 'Nonprofit Admin', followers: 45, verified: true },
    { id: '4', name: 'Sofia Kovalchuk', location: 'Odesa', role: 'Volunteer', followers: 67, verified: false },
    { id: '5', name: 'UNICEF Ukraine', location: 'Multiple', role: 'Organization', followers: 445, verified: true }
  ];

  const handleInputChange = (field: string, value: string) => {
    if (field === 'bio') {
      if (value.length <= 500) {
        setProfileData(prev => ({ ...prev, [field]: value }));
        setBioCharCount(value.length);
      }
    } else {
      setProfileData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('File size must be less than 8MB');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Only JPEG and PNG files are supported');
        return;
      }
      setProfileData(prev => ({ ...prev, profileImage: file }));
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const copyProfileLink = () => {
    const profileUrl = `https://platforma.org/profile/oleksandr-p-kyiv`;
    navigator.clipboard.writeText(profileUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
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
      case 'Volunteer':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Coordinator':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Organization':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Public Profile
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Manage your public profile and privacy settings
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('edit')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'edit'
              ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab('followers')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'followers'
              ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Followers ({followers.length})
        </button>
        <button
          onClick={() => setActiveTab('following')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'following'
              ? 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Following ({following.length})
        </button>
      </div>

      {/* Edit Profile Tab */}
      {activeTab === 'edit' && (
        <div className="space-y-6">
          {/* Privacy Controls */}
          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Privacy Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Public Profile
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    {profileData.isPublic 
                      ? 'Your profile appears in search results and Network directory'
                      : 'Your profile is hidden from all searches and directories'
                    }
                  </div>
                </div>
                <button
                  onClick={() => setProfileData(prev => ({ ...prev, isPublic: !prev.isPublic }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    profileData.isPublic ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      profileData.isPublic ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Show "My Donations" Button
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                    Display donation history button on your profile
                  </div>
                </div>
                <button
                  onClick={() => setProfileData(prev => ({ ...prev, showDonationsButton: !prev.showDonationsButton }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    profileData.showDonationsButton ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      profileData.showDonationsButton ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Profile Information
            </h3>
            
            <div className="space-y-4">
              {/* Profile Image */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Profile Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <Camera className={`w-8 h-8 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-400'}`} />
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="profile-image"
                    />
                    <label
                      htmlFor="profile-image"
                      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Upload Image
                    </label>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      JPEG or PNG, max 8MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Name *
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Location
                </label>
                <select
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {ukrainianCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Bio */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Bio
                </label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Tell others about yourself and your humanitarian work..."
                />
                <div className={`text-xs mt-1 text-right ${
                  bioCharCount > 450 ? 'text-red-500' : theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {bioCharCount}/500 characters
                </div>
              </div>

              {/* Social Links */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Social Media Links
                </label>
                <div className="space-y-3">
                  {Object.entries(profileData.socialLinks).map(([platform, value]) => (
                    <div key={platform}>
                      <input
                        type="url"
                        value={value}
                        onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Save className="w-4 h-4" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>

          {/* Profile Sharing */}
          <div 
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Share Your Profile
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value="https://platforma.org/profile/oleksandr-p-kyiv"
                  readOnly
                  className={`w-full px-3 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <button
                onClick={copyProfileLink}
                className={`px-4 py-2 rounded-lg border transition-colors flex items-center space-x-2 ${
                  copySuccess
                    ? 'bg-green-100 border-green-300 text-green-700'
                    : theme === 'dark'
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Copy className="w-4 h-4" />
                <span>{copySuccess ? 'Copied!' : 'Copy'}</span>
              </button>
              <button className={`px-4 py-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <QrCode className="w-4 h-4" />
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
      )}

      {/* Followers Tab */}
      {activeTab === 'followers' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {followers.map((follower) => (
              <div 
                key={follower.id}
                style={gradientStyle}
                className={`rounded-xl p-4 border ${
                  theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {follower.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {follower.name}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                        {follower.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${getRoleBadgeColor(follower.role)}`}>
                      {follower.role}
                    </span>
                    <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {follower.followers} followers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Following Tab */}
      {activeTab === 'following' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {following.map((followed) => (
              <div 
                key={followed.id}
                style={gradientStyle}
                className={`rounded-xl p-4 border ${
                  theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {followed.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {followed.name}
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                        {followed.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${getRoleBadgeColor(followed.role)}`}>
                      {followed.role}
                    </span>
                    <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {followed.followers} followers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};