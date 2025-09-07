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
  section?: 'universal' | 'personal' | 'donor-main' | 'donor-sub' | 'recipient-main' | 'recipient-sub' | 'nonprofit-main' | 'nonprofit-sub' | 'supplier-main' | 'supplier-sub';
}

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const { currentRole, currentOrganization, sidebarCollapsed } = useApp();
  const { isAuthenticated } = useAuth();

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
      { id: 'my-dashboard', label: 'My Dashboard', icon: <User className="w-5 h-5" />, path: '/dashboard', section: 'personal' }
    ];

    // DONOR SECTION - Always visible in demo
    const donorItems: NavItem[] = [
      { id: 'donor-dashboard', label: 'Donor Dashboard', icon: <Heart className="w-5 h-5" />, path: '/donor-dashboard', section: 'donor-main' },
      { id: 'donor-projects', label: 'Funded Projects', icon: <DollarSign className="w-5 h-5" />, path: '/donor-projects', section: 'donor-sub' },
      { id: 'donor-impact', label: 'Impact Metrics', icon: <TrendingUp className="w-5 h-5" />, path: '/donor-impact', section: 'donor-sub' },
      { id: 'donor-history', label: 'Donation History', icon: <FileText className="w-5 h-5" />, path: '/donor-history', section: 'donor-sub' },
      { id: 'donor-give', label: 'To Give', icon: <Gift className="w-5 h-5" />, path: '/donor-give', section: 'donor-sub' }
    ];

    // RECIPIENT SECTION - Always visible in demo
    const recipientItems: NavItem[] = [
      { id: 'recipient-dashboard', label: 'Recipient Dashboard', icon: <User className="w-5 h-5" />, path: '/recipient-dashboard', section: 'recipient-main' },
      { id: 'my-requests', label: 'My Requests', icon: <FileText className="w-5 h-5" />, path: '/my-requests', section: 'recipient-sub' },
      { id: 'my-wishlist', label: 'My Wishlist', icon: <Heart className="w-5 h-5" />, path: '/my-wishlist', section: 'recipient-sub' },
      { id: 'my-logistics', label: 'My Logistics', icon: <Truck className="w-5 h-5" />, path: '/my-logistics', section: 'recipient-sub' },
      { id: 'favorites', label: 'Favorite Nonprofits', icon: <Star className="w-5 h-5" />, path: '/favorites', section: 'recipient-sub' }
    ];

    // NONPROFIT SECTION - Always visible in demo
    const nonprofitItems: NavItem[] = [
      { id: 'nonprofit-dashboard', label: 'Nonprofit Dashboard', icon: <Target className="w-5 h-5" />, path: '/nonprofit-dashboard', section: 'nonprofit-main' },
      { id: 'inventory', label: 'My Inventory', icon: <Archive className="w-5 h-5" />, path: '/inventory', section: 'nonprofit-sub' },
      { id: 'fundraisers', label: 'My Fundraisers', icon: <Target className="w-5 h-5" />, path: '/fundraisers', section: 'nonprofit-sub' },
      { id: 'requests', label: 'Requests', icon: <FileText className="w-5 h-5" />, path: '/requests', section: 'nonprofit-sub' },
      { id: 'logistics', label: 'Logistics', icon: <Truck className="w-5 h-5" />, path: '/logistics', section: 'nonprofit-sub' },
      { id: 'documents', label: 'My Documents', icon: <FolderOpen className="w-5 h-5" />, path: '/documents', section: 'nonprofit-sub' }
    ];

    // SUPPLIER SECTION - Always visible in demo
    const supplierItems: NavItem[] = [
      { id: 'supplier-dashboard', label: 'Supplier Dashboard', icon: <Package className="w-5 h-5" />, path: '/supplier-dashboard', section: 'supplier-main' },
      { id: 'catalog', label: 'My Catalog', icon: <Package className="w-5 h-5" />, path: '/catalog', section: 'supplier-sub' },
      { id: 'orders', label: 'Orders', icon: <ShoppingCart className="w-5 h-5" />, path: '/orders', section: 'supplier-sub' },
      { id: 'supplier-analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, path: '/supplier-analytics', section: 'supplier-sub' }
    ];

    return [...universal, ...personal, ...donorItems, ...recipientItems, ...nonprofitItems, ...supplierItems];
  };

  const navigationItems = getNavigationItems();
  const universalItems = navigationItems.filter(item => item.section === 'universal');
  const personalItems = navigationItems.filter(item => item.section === 'personal');
  const donorMainItems = navigationItems.filter(item => item.section === 'donor-main');
  const donorSubItems = navigationItems.filter(item => item.section === 'donor-sub');
  const recipientMainItems = navigationItems.filter(item => item.section === 'recipient-main');
  const recipientSubItems = navigationItems.filter(item => item.section === 'recipient-sub');
  const nonprofitMainItems = navigationItems.filter(item => item.section === 'nonprofit-main');
  const nonprofitSubItems = navigationItems.filter(item => item.section === 'nonprofit-sub');
  const supplierMainItems = navigationItems.filter(item => item.section === 'supplier-main');
  const supplierSubItems = navigationItems.filter(item => item.section === 'supplier-sub');

  const renderNavItem = (item: NavItem, isSubItem = false) => (
    <li key={item.id}>
      <button
        onClick={() => setActiveSection(item.id)}
        className={`w-full flex items-center py-2 text-sm font-medium rounded-lg transition-colors ${
          activeSection === item.id
            ? 'bg-yellow-400 text-slate-900'
            : 'text-slate-700 hover:bg-slate-100'
        } ${sidebarCollapsed ? 'justify-center px-3' : `justify-start space-x-3 ${isSubItem ? 'px-6' : 'px-3'}`}`}
        title={sidebarCollapsed ? item.label : undefined}
      >
        {item.icon}
        {!sidebarCollapsed && <span>{item.label}</span>}
      </button>
    </li>
  );

  return (
    <aside className={`fixed left-0 top-16 bottom-0 bg-slate-50 border-r border-gray-200 transition-all duration-300 z-40 ${
      sidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="h-full flex flex-col overflow-y-auto">
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
              {universalItems.map((item) => renderNavItem(item))}
            </ul>
          </div>

          {/* Personal Section */}
          {isAuthenticated && personalItems.length > 0 && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Personal
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {personalItems.map((item) => renderNavItem(item))}
              </ul>
            </div>
          )}

          {/* Donor Section */}
          {isAuthenticated && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Donor
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {donorMainItems.map((item) => renderNavItem(item))}
                {donorSubItems.map((item) => renderNavItem(item, true))}
              </ul>
            </div>
          )}

          {/* Recipient Section */}
          {isAuthenticated && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Recipient
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {recipientMainItems.map((item) => renderNavItem(item))}
                {recipientSubItems.map((item) => renderNavItem(item, true))}
              </ul>
            </div>
          )}

          {/* Nonprofit Section */}
          {isAuthenticated && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Nonprofit
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {nonprofitMainItems.map((item) => renderNavItem(item))}
                {nonprofitSubItems.map((item) => renderNavItem(item, true))}
              </ul>
            </div>
          )}

          {/* Supplier Section */}
          {isAuthenticated && (
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 mb-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Supplier
                  </h3>
                </div>
              )}
              <ul className="space-y-1">
                {supplierMainItems.map((item) => renderNavItem(item))}
                {supplierSubItems.map((item) => renderNavItem(item, true))}
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