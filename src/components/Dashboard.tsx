import React from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { DonorDashboard } from './dashboards/DonorDashboard';
import { RecipientDashboard } from './dashboards/RecipientDashboard';
import { NonprofitDashboard } from './dashboards/NonprofitDashboard';
import { SupplierDashboard } from './dashboards/SupplierDashboard';
import { HomeDashboard } from './dashboards/HomeDashboard';

export const Dashboard: React.FC = () => {
  const { currentRole, currentOrganization } = useApp();
  const { isAuthenticated } = useAuth();

  const renderDashboard = () => {
    if (!isAuthenticated) {
      return <HomeDashboard />;
    }

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
  };

  return (
    <div className="min-h-screen p-6">
      {renderDashboard()}
    </div>
  );
};