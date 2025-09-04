import React from 'react';
import { Truck, Package, CheckCircle, Clock, AlertTriangle, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const NonprofitLogistics: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const shipments = [
    {
      id: '1',
      trackingNumber: 'NPO-IN-2024-001',
      type: 'Inbound',
      supplier: 'MedSupply Europe',
      destination: 'Ukrainian Red Cross Warehouse',
      items: ['N95 Masks (1000 units)', 'Medical Gloves (2000 pairs)', 'Hand Sanitizer (100 bottles)'],
      status: 'In Transit',
      estimatedArrival: '2024-01-20',
      lastUpdate: 'Cleared customs - Lviv checkpoint'
    },
    {
      id: '2',
      trackingNumber: 'NPO-OUT-2024-002',
      type: 'Outbound',
      supplier: 'Ukrainian Red Cross',
      destination: 'Kharkiv Regional Hospital',
      items: ['Thermal Blankets (200 units)', 'First Aid Kits (50 units)'],
      status: 'Delivered',
      estimatedArrival: '2024-01-18',
      lastUpdate: 'Successfully delivered and confirmed'
    },
    {
      id: '3',
      trackingNumber: 'NPO-IN-2024-003',
      type: 'Inbound',
      supplier: 'Emergency Supplies Co',
      destination: 'Ukrainian Red Cross Warehouse',
      items: ['Water Purification Tablets (5000 units)', 'Portable Filters (25 units)'],
      status: 'Preparing',
      estimatedArrival: '2024-01-25',
      lastUpdate: 'Package being prepared for shipment'
    },
    {
      id: '4',
      trackingNumber: 'NPO-OUT-2024-004',
      type: 'Outbound',
      supplier: 'Ukrainian Red Cross',
      destination: 'Lviv Community Center',
      items: ['Food Packages (150 units)', 'Baby Formula (30 units)'],
      status: 'Delayed',
      estimatedArrival: '2024-01-22',
      lastUpdate: 'Delayed due to road conditions'
    },
    {
      id: '5',
      trackingNumber: 'NPO-IN-2024-005',
      type: 'Inbound',
      supplier: 'Educational Aid International',
      destination: 'Ukrainian Red Cross Warehouse',
      items: ['School Supplies (300 sets)', 'Educational Books (500 units)'],
      status: 'In Transit',
      estimatedArrival: '2024-01-21',
      lastUpdate: 'En route from Warsaw distribution center'
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

  const getTypeColor = (type: string) => {
    return type === 'Inbound' 
      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
  };

  const inboundCount = shipments.filter(s => s.type === 'Inbound').length;
  const outboundCount = shipments.filter(s => s.type === 'Outbound').length;
  const deliveredCount = shipments.filter(s => s.status === 'Delivered').length;
  const successRate = Math.round((deliveredCount / shipments.length) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Logistics
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Track inbound and outbound shipments for your organization
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-4 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Package className="w-5 h-5 text-blue-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {inboundCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Inbound
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
            <Truck className="w-5 h-5 text-purple-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {outboundCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Outbound
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
                {deliveredCount}
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
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div>
              <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {successRate}%
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Success Rate
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
                  <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(shipment.type)}`}>
                    {shipment.type}
                  </span>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(shipment.status)}
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                    <strong>From:</strong> {shipment.supplier}
                  </span>
                  <div className="flex items-center space-x-1">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      To: {shipment.destination}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                      ETA: {shipment.estimatedArrival}
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