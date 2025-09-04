import React from 'react';
import { Truck, MapPin, Calendar, Package, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const RecipientLogistics: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const shipments = [
    {
      id: '1',
      trackingNumber: 'UA-MED-2024-001',
      items: ['N95 Masks (200 units)', 'Medical Gloves (500 pairs)'],
      supplier: 'MedSupply Europe',
      origin: 'Warsaw, Poland',
      destination: 'Kharkiv Regional Hospital',
      status: 'In Transit',
      estimatedDelivery: '2024-01-20',
      lastUpdate: 'Crossed Ukrainian border - Lviv checkpoint'
    },
    {
      id: '2',
      trackingNumber: 'UA-EMG-2024-002',
      items: ['Thermal Blankets (50 units)', 'Winter Jackets (25 units)'],
      supplier: 'EmergencyAid Corp',
      origin: 'Berlin, Germany',
      destination: 'Kharkiv Regional Hospital',
      status: 'Delivered',
      estimatedDelivery: '2024-01-18',
      lastUpdate: 'Successfully delivered and received'
    },
    {
      id: '3',
      trackingNumber: 'UA-WAT-2024-003',
      items: ['Water Purification Tablets (500 units)', 'Portable Filters (2 units)'],
      supplier: 'WaterTech Solutions',
      origin: 'Vienna, Austria',
      destination: 'Kharkiv Regional Hospital',
      status: 'Preparing',
      estimatedDelivery: '2024-01-25',
      lastUpdate: 'Package being prepared for shipment'
    },
    {
      id: '4',
      trackingNumber: 'UA-PWR-2024-004',
      items: ['Portable Solar Chargers (10 units)', 'Power Banks (20 units)'],
      supplier: 'SolarTech Ukraine',
      origin: 'Kyiv, Ukraine',
      destination: 'Kharkiv Regional Hospital',
      status: 'Delayed',
      estimatedDelivery: '2024-01-22',
      lastUpdate: 'Delayed due to weather conditions'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'In Transit':
        return <Truck className="w-4 h-4 text-blue-500" />;
      case 'Preparing':
        return <Package className="w-4 h-4 text-yellow-500" />;
      case 'Delayed':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Preparing':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Delayed':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Logistics
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Track shipments and deliveries to your facility
        </p>
      </div>

      {/* Logistics Summary */}
      <div className="grid grid-cols-4 gap-4">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Truck className="w-5 h-5 text-blue-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {shipments.filter(s => s.status === 'In Transit').length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                In Transit
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {shipments.filter(s => s.status === 'Delivered').length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Delivered
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Package className="w-5 h-5 text-yellow-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {shipments.filter(s => s.status === 'Preparing').length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Preparing
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {shipments.filter(s => s.status === 'Delayed').length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Delayed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipments List */}
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div 
            key={shipment.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {shipment.trackingNumber}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(shipment.status)}
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      {shipment.origin} → {shipment.destination}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      ETA: {shipment.estimatedDelivery}
                    </span>
                  </div>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  <strong>Latest Update:</strong> {shipment.lastUpdate}
                </p>
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-2">
              <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Items in Shipment:
              </h4>
              <div className="flex flex-wrap gap-2">
                {shipment.items.map((item, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-xs rounded-full ${
                      theme === 'dark' ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};