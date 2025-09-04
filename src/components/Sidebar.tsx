import React from 'react';
import { 
  Home, 
  Package, 
  Heart, 
  Users, 
  BarChart3, 
  User, 
  DollarSign, 
  TrendingUp, 
  Gift,
  FileText,
  ShoppingCart,
  Truck,
  ClipboardList,
  Star,
  Archive,
  Target,
  FolderOpen,
  Settings
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  section?: 'universal' | 'personal';
}

export const Sidebar: React.FC = () => {
  const { currentRole, currentOrganization, sidebarCollapsed } = useApp();
  const { isAuthenticated } = useAuth();
  const [activeItem, setActiveItem] = React.useState('dashboard');

  const getNavigationItems = (): NavItem[] => {
    const universal: NavItem[] = [
      { id: 'home', label: 'Home Dashboard', icon: <Home className="w-5 h-5" />, path: '/home', section: 'universal' },
      { id: 'catalogs', label: 'All Catalogs', icon: <Package className="w-5 h-5" />, path: '/catalogs', section: 'universal' },
      { id: 'wishlists', label: 'All Wishlists', icon: <ClipboardList className="w-5 h-5" />, path: '/wishlists', section: 'universal' },
      { id: 'network', label: 'Network', icon: <Users className="w-5 h-5" />, path: '/network', section: 'universal' },
      { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, path: '/analytics', section: 'universal' }
    ];

    if (!isAuthenticated) return universal;

    const personal: NavItem[] = [
      { id: 'dashboard', label: 'My Dashboard', icon: <User className="w-5 h-5" />, path: '/dashboard', section: 'personal' }
    ];

    // Add role-specific items
    if (currentOrganization) {
      if (currentOrganization.type === 'nonprofit') {
        personal.push(
          { id: 'inventory', label: 'My Inventory', icon: <Archive className="w-5 h-5" />, path: '/inventory', section: 'personal' },
          { id: 'fundraisers', label: 'My Fundraisers', icon: <Target className="w-5 h-5" />, path: '/fundraisers', section: 'personal' },
          { id: 'requests', label: 'Requests', icon: <FileText className="w-5 h-5" />, path: '/requests', section: 'personal' },
          { id: 'logistics', label: 'Logistics', icon: <Truck className="w-5 h-5" />, path: '/logistics', section: 'personal' },
          { id: 'documents', label: 'My Documents', icon: <FolderOpen className="w-5 h-5" />, path: '/documents', section: 'personal' }
        );
      } else if (currentOrganization.type === 'supplier') {
        personal.push(
          { id: 'catalog', label: 'My Catalog', icon: <Package className="w-5 h-5" />, path: '/catalog', section: 'personal' },
          { id: 'orders', label: 'Orders', icon: <ShoppingCart className="w-5 h-5" />, path: '/orders', section: 'personal' },
          { id: 'logistics', label: 'Logistics', icon: <Truck className="w-5 h-5" />, path: '/logistics', section: 'personal' },
          { id: 'supplier-analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, path: '/supplier-analytics', section: 'personal' },
          { id: 'documents', label: 'My Documents', icon: <FolderOpen className="w-5 h-5" />, path: '/documents', section: 'personal' }
        );
      }
    } else {
      if (currentRole === 'donor') {
        personal.push(
          { id: 'funded-projects', label: 'Funded Projects', icon: <DollarSign className="w-5 h-5" />, path: '/funded-projects', section: 'personal' },
          { id: 'impact', label: 'Impact Metrics', icon: <TrendingUp className="w-5 h-5" />, path: '/impact', section: 'personal' },
          { id: 'to-give', label: 'To Give', icon: <Gift className="w-5 h-5" />, path: '/to-give', section: 'personal' }
        );
      } else if (currentRole === 'recipient') {
        personal.push(
          { id: 'my-requests', label: 'My Requests', icon: <FileText className="w-5 h-5" />, path: '/my-requests', section: 'personal' },
          { id: 'my-wishlist', label: 'My Wishlist', icon: <Heart className="w-5 h-5" />, path: '/my-wishlist', section: 'personal' },
          { id: 'my-logistics', label: 'My Logistics', icon: <Truck className="w-5 h-5" />, path: '/my-logistics', section: 'personal' },
          { id: 'favorites', label: 'Favorite Nonprofits', icon: <Star className="w-5 h-5" />, path: '/favorites', section: 'personal' }
        );
      }
    }

    return [...universal, ...personal];
  };

  const navigationItems = getNavigationItems();
  const universalItems = navigationItems.filter(item => item.section === 'universal');
  const personalItems = navigationItems.filter(item => item.section === 'personal');

  return (
    <aside className={`fixed left-0 top-16 bottom-0 bg-slate-50 border-r border-gray-200 transition-all duration-300 z-40 ${
      sidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-3 py-4 space-y-6">
          {/* Universal Section */}
          <div>
            {!sidebarCollapsed && (
              <div className="px-3 mb-3">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Browse
                </h3>
              </div>
            )}
            <ul className="space-y-1">
              {universalItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeItem === item.id
                        ? 'bg-yellow-400 text-slate-900'
                        : 'text-slate-700 hover:bg-slate-100'
                    } ${sidebarCollapsed ? 'justify-center' : 'justify-start space-x-3'}`}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    {item.icon}
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Section */}
          {isAuthenticated && personalItems.length > 0 && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {currentOrganization ? currentOrganization.name : 'Personal'}
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {personalItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeItem === item.id
                          ? 'bg-yellow-400 text-slate-900'
                          : 'text-slate-700 hover:bg-slate-100'
                      } ${sidebarCollapsed ? 'justify-center' : 'justify-start space-x-3'}`}
                      title={sidebarCollapsed ? item.label : undefined}
                    >
                      {item.icon}
                      {!sidebarCollapsed && <span>{item.label}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Settings */}
        <div className="p-3 border-t border-gray-200">
          <button
            className={`w-full flex items-center px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ${
              sidebarCollapsed ? 'justify-center' : 'justify-start space-x-3'
            }`}
            title={sidebarCollapsed ? 'Settings' : undefined}
          >
            <Settings className="w-5 h-5" />
            {!sidebarCollapsed && <span>Settings</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};