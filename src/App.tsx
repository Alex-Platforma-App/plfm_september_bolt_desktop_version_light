import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { HomeDashboard } from './components/dashboards/HomeDashboard';
import { DonorDashboard } from './components/dashboards/DonorDashboard';
import { RecipientDashboard } from './components/dashboards/RecipientDashboard';
import { NonprofitDashboard } from './components/dashboards/NonprofitDashboard';
import { SupplierDashboard } from './components/dashboards/SupplierDashboard';
import { AuthProvider } from './context/AuthContext';
import { AppProvider, useApp } from './context/AppContext';
import { useAuth } from './context/AuthContext';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { currentRole, currentOrganization } = useApp();
  const { isAuthenticated } = useAuth();

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeDashboard />;
      case 'dashboard':
        if (!isAuthenticated) return <HomeDashboard />;
        if (currentOrganization) {
          if (currentOrganization.type === 'nonprofit') {
            return <NonprofitDashboard />;
          } else if (currentOrganization.type === 'supplier') {
            return <SupplierDashboard />;
          }
        }
        switch (currentRole) {
          case 'donor':
            return <DonorDashboard />;
          case 'recipient':
            return <RecipientDashboard />;
          default:
            return <HomeDashboard />;
        }
      case 'catalogs':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">All Catalogs</h1>
            <p className="text-slate-600">Browse all available product catalogs from suppliers.</p>
          </div>
        );
      case 'wishlists':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">All Wishlists</h1>
            <p className="text-slate-600">View wishlists from organizations and individuals in need.</p>
          </div>
        );
      case 'network':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Network</h1>
            <p className="text-slate-600">Connect with organizations, suppliers, and other users.</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Analytics</h1>
            <p className="text-slate-600">View platform-wide analytics and impact metrics.</p>
          </div>
        );
      // Personal sections
      case 'inventory':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Inventory</h1>
            <p className="text-slate-600">Manage your organization's inventory.</p>
          </div>
        );
      case 'fundraisers':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Fundraisers</h1>
            <p className="text-slate-600">Manage your active fundraising campaigns.</p>
          </div>
        );
      case 'requests':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Requests</h1>
            <p className="text-slate-600">View and manage aid requests.</p>
          </div>
        );
      case 'logistics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Logistics</h1>
            <p className="text-slate-600">Track shipments and manage logistics operations.</p>
          </div>
        );
      case 'documents':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Documents</h1>
            <p className="text-slate-600">Manage your organization's documents and certifications.</p>
          </div>
        );
      case 'catalog':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Catalog</h1>
            <p className="text-slate-600">Manage your product catalog and listings.</p>
          </div>
        );
      case 'orders':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Orders</h1>
            <p className="text-slate-600">View and manage customer orders.</p>
          </div>
        );
      case 'supplier-analytics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Supplier Analytics</h1>
            <p className="text-slate-600">View your business performance metrics.</p>
          </div>
        );
      case 'funded-projects':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Funded Projects</h1>
            <p className="text-slate-600">Track projects you've funded and their impact.</p>
          </div>
        );
      case 'impact':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Impact Metrics</h1>
            <p className="text-slate-600">View the impact of your donations.</p>
          </div>
        );
      case 'to-give':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">To Give</h1>
            <p className="text-slate-600">Items you're planning to donate.</p>
          </div>
        );
      case 'my-requests':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Requests</h1>
            <p className="text-slate-600">Track your aid requests and their status.</p>
          </div>
        );
      case 'my-wishlist':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Wishlist</h1>
            <p className="text-slate-600">Items you need and are hoping to receive.</p>
          </div>
        );
      case 'my-logistics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">My Logistics</h1>
            <p className="text-slate-600">Track your incoming shipments and deliveries.</p>
          </div>
        );
      case 'favorites':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Favorite Nonprofits</h1>
            <p className="text-slate-600">Organizations you trust and support regularly.</p>
          </div>
        );
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <main className="flex-1 ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;