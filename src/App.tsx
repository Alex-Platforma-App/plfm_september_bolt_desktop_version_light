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
import { AllCatalogs } from './components/AllCatalogs';
import { AllWishlists } from './components/dashboards/AllWishlists';
import { Network } from './components/dashboards/Network';
import { Analytics } from './components/dashboards/Analytics';
import { DonorProjects } from './components/dashboards/DonorProjects';
import { DonorImpactMetrics } from './components/dashboards/DonorImpactMetrics';
import { DonorToGive } from './components/dashboards/DonorToGive';
import { RecipientRequests } from './components/dashboards/RecipientRequests';
import { RecipientWishlist } from './components/dashboards/RecipientWishlist';
import { RecipientLogistics } from './components/dashboards/RecipientLogistics';
import { RecipientNonprofits } from './components/dashboards/RecipientNonprofits';
import { NonprofitInventory } from './components/dashboards/NonprofitInventory';
import { NonprofitFundraisers } from './components/dashboards/NonprofitFundraisers';
import { NonprofitRequests } from './components/dashboards/NonprofitRequests';
import { NonprofitLogistics } from './components/dashboards/NonprofitLogistics';
import { NonprofitDocuments } from './components/dashboards/NonprofitDocuments';
import { SupplierCatalog } from './components/dashboards/SupplierCatalog';
import { SupplierAnalytics } from './components/dashboards/SupplierAnalytics';
import { SupplierDocuments } from './components/dashboards/SupplierDocuments';
import { SupplierOrders } from './components/dashboards/SupplierOrders';
import { ThemeProvider } from './contexts/ThemeContext';
import { DonorHistory } from './components/dashboards/DonorHistory';
import { MyPublicProfile } from './components/Profile/MyPublicProfile';
import { ProfileSettings } from './components/Profile/ProfileSettings';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeDashboard />;
      case 'my-dashboard':
        return <Dashboard />;
      case 'donor-dashboard':
        return <DonorDashboard />;
      case 'recipient-dashboard':
        return <RecipientDashboard />;
      case 'nonprofit-dashboard':
        return <NonprofitDashboard />;
      case 'supplier-dashboard':
        return <SupplierDashboard />;
      case 'network':
        return (
          <Network />
        );
      case 'analytics':
        return (
          <Analytics />
        );
      case 'wishlists':
        return (
          <AllWishlists />
        );
      case 'catalogs':
        return (
          <AllCatalogs />
        );
      case 'donor-projects':
        return (
          <DonorProjects />
        );
      case 'donor-impact':
        return (
          <DonorImpactMetrics />
        );
      case 'donor-history':
        return (
          <DonorHistory />
        );
      case 'donor-give':
        return (
          <DonorToGive />
        );
      case 'my-requests':
        return (
          <RecipientRequests />
        );
      case 'my-wishlist':
        return (
          <RecipientWishlist />
        );
      case 'my-logistics':
        return (
          <RecipientLogistics />
        );
      case 'favorites':
        return (
          <RecipientNonprofits />
        );
      case 'inventory':
        return (
          <NonprofitInventory />
        );
      case 'fundraisers':
        return (
          <NonprofitFundraisers />
        );
      case 'requests':
        return (
          <NonprofitRequests />
        );
      case 'logistics':
        return (
          <NonprofitLogistics />
        );
      case 'documents':
        return (
          <NonprofitDocuments />
        );
      case 'catalog':
        return (
          <SupplierCatalog />
        );
      case 'supplier-analytics':
        return (
          <SupplierAnalytics />
        );
      case 'orders':
        return (
          <SupplierOrders />
        );
      case 'my-public-profile':
        return (
          <MyPublicProfile onNavigate={handleNavigate} />
        );
      case 'profile-settings':
        return (
          <ProfileSettings />
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
        <main className="flex-1 ml-64 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;