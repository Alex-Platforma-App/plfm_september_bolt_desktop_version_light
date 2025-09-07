import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useApp, UserRole, Organization, OrganizationRole } from '../context/AppContext';
import { AuthModal } from './AuthModal';

const organizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Ukrainian Medical Foundation',
    type: 'nonprofit',
    role: 'admin',
    logo: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 'org-2',
    name: 'MedSupply Ukraine',
    type: 'supplier',
    role: 'member',
    logo: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { currentRole, currentOrganization, setCurrentRole, setCurrentOrganization } = useApp();
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleRoleSwitch = (role: UserRole, org?: Organization) => {
    if (org) {
      // When selecting an organization, set both role and organization
      setCurrentRole(org.type as UserRole); // 'nonprofit' or 'supplier'
      setCurrentOrganization(org);
    } else {
      // When selecting individual roles, clear organization
      setCurrentRole(role);
      setCurrentOrganization(null);
    }
    setShowContextMenu(false);
  };

  const getCurrentContextLabel = () => {
    if (currentOrganization) {
      return `${currentOrganization.name} (${currentOrganization.role})`;
    }
    return `Individual ${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/Group 1321314725 copy.png" 
                alt="Platforma Logo" 
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
              <span className="text-slate-500 text-xs">Fueling Impact</span>
            </div>

            {/* Context Switcher */}
            {isAuthenticated && (
              <div className="relative ml-8">
                <button
                  onClick={() => setShowContextMenu(!showContextMenu)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>{getCurrentContextLabel()}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showContextMenu && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-2">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 py-2">
                        Individual Roles
                      </div>
                      <button
                        onClick={() => handleRoleSwitch('donor')}
                        className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 ${
                          !currentOrganization && currentRole === 'donor' ? 'bg-yellow-50 text-yellow-800' : 'text-slate-700'
                        }`}
                      >
                        Individual Donor
                      </button>
                      <button
                        onClick={() => handleRoleSwitch('recipient')}
                        className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 ${
                          !currentOrganization && currentRole === 'recipient' ? 'bg-yellow-50 text-yellow-800' : 'text-slate-700'
                        }`}
                      >
                        Individual Recipient
                      </button>

                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 py-2 mt-3">
                        Organizations
                      </div>
                      {organizations.map((org) => (
                        <button
                          key={org.id}
                          onClick={() => handleRoleSwitch(org.type as UserRole, org)}
                          className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 ${
                            currentOrganization?.id === org.id ? 'bg-yellow-50 text-yellow-800' : 'text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            {org.logo && (
                              <img src={org.logo} alt="" className="w-5 h-5 rounded-full" />
                            )}
                            <div>
                              <div className="font-medium">{org.name}</div>
                              <div className="text-xs text-slate-500">{org.role}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Authentication */}
          <div className="flex items-center space-x-3">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                  className="px-4 py-2 bg-yellow-400 text-slate-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => {
                    setAuthMode('signin');
                    setShowAuthModal(true);
                  }}
                  className="px-4 py-2 bg-gray-100 text-slate-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Sign In
                </button>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt="" className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-slate-900 font-semibold text-sm">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                  )}
                  <span className="text-slate-700 font-medium">{user?.name}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </button>

                {showUserMenu && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-2">
                      <div className="px-3 py-2 text-sm text-slate-500 border-b border-gray-100">
                        {user?.email}
                      </div>
                      <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-gray-50 rounded-md">
                        Settings
                      </button>
                      <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-gray-50 rounded-md">
                        Help & Support
                      </button>
                      <hr className="my-1" />
                      <button
                        onClick={logout}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Click outside handlers */}
        {(showContextMenu || showUserMenu) && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setShowContextMenu(false);
              setShowUserMenu(false);
            }}
          />
        )}
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </>
  );
};