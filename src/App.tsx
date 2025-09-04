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
import { ThemeProvider } from './contexts/ThemeContext';
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
import { ThemeProvider } from './contexts/ThemeContext';
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

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
          <AllWishlists />
    switch (activeSection) {
      case 'home':
        return <HomeDashboard />;
          <Network />
            return <NonprofitDashboard />;
          } else if (currentOrganization.type === 'supplier') {
            return <SupplierDashboard />;
          <Analytics />
            return <DonorDashboard />;
          case 'recipient':
            return <RecipientDashboard />;
          default:
          <NonprofitInventory />
          <AllCatalogs />
        );
      case 'wishlists':
          <NonprofitFundraisers />
        return (
          <Network />
        );
          <NonprofitRequests />
      // Personal sections
      case 'inventory':
        return (
          <NonprofitLogistics />
          <NonprofitFundraisers />
        );
      case 'requests':
          <NonprofitDocuments />
        return (
          <NonprofitLogistics />
        );
          <SupplierCatalog />
      case 'catalog':
        return (
          <SupplierCatalog />
        );
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Orders</h1>
            <p className="text-gray-600">View and manage customer orders.</p>
          <AllCatalogs />
          <SupplierAnalytics />
          <DonorProjects />
          <DonorImpactMetrics />
          <DonorToGive />
          <RecipientRequests />
          <RecipientWishlist />
          <RecipientLogistics />
        );
      case 'favorites':
        return (
          <RecipientNonprofits />
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
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;