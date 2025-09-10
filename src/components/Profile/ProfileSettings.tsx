import React, { useState } from 'react';
import { Save, Upload, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ProfileSettings: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: 'Dr. Oksana Marchenko',
    bio: 'Emergency medic specializing in battlefield medical evacuation. Working with mobile medical units across eastern Ukraine. Regularly coordinating medical supply deliveries for frontline healthcare. 🚑🇺🇦',
    location: 'Kharkiv, Ukraine',
    specialization: 'Medical Evacuation Specialist',
    telegram: '@dr_oksana_medical',
    linkedin: 'https://linkedin.com/in/dr-oksana-marchenko',
    facebook: 'https://facebook.com/dr.oksana.marchenko'
  });

  const [showWishlistButton, setShowWishlistButton] = useState(true);
  const [isPublic, setIsPublic] = useState(true);

  const handleSave = () => {
    console.log('Profile settings saved:', formData);
    // In a real app, this would save to backend
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Profile Settings
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Manage your public profile information and privacy settings
        </p>
      </div>

      {/* Profile Information */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Profile Information
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              maxLength={500}
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}>
              {formData.bio.length}/500 characters
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Medical Specialization
            </label>
            <input
              type="text"
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Professional Contact
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Telegram
            </label>
            <input
              type="text"
              value={formData.telegram}
              onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
              placeholder="@username"
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              LinkedIn
            </label>
            <input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              placeholder="https://linkedin.com/in/username"
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Facebook
            </label>
            <input
              type="url"
              value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              placeholder="https://facebook.com/username"
              className={`w-full px-3 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Privacy Settings
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Public Profile
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Make your profile visible to other platform users
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Show Wishlist Button
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Display "View My Medical Supply Wishlist" button on your profile
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showWishlistButton}
                onChange={(e) => setShowWishlistButton(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Profile Image Upload */}
      <div className={`rounded-xl p-6 border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Profile Image
        </h3>
        
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-red-200 dark:border-red-800">
            <img 
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Dr. Oksana Marchenko" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload New Photo</span>
            </button>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
              JPG, PNG up to 8MB. Recommended: 400x400px
            </p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-medium"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};