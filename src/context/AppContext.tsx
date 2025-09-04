import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'donor' | 'recipient' | 'nonprofit' | 'supplier';
export type OrganizationRole = 'admin' | 'member';

export interface Organization {
  id: string;
  name: string;
  type: 'nonprofit' | 'supplier';
  role: OrganizationRole;
  logo?: string;
}

export interface AppContextType {
  currentRole: UserRole;
  currentOrganization: Organization | null;
  setCurrentRole: (role: UserRole) => void;
  setCurrentOrganization: (org: Organization | null) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('donor');
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <AppContext.Provider value={{
      currentRole,
      currentOrganization,
      setCurrentRole,
      setCurrentOrganization,
      sidebarCollapsed,
      setSidebarCollapsed
    }}>
      {children}
    </AppContext.Provider>
  );
};