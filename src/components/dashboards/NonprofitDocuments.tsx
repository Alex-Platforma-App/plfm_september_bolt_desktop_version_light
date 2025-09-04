import React from 'react';
import { FileText, Download, Upload, Eye, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const NonprofitDocuments: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const documents = [
    {
      id: '1',
      name: 'Impact Report Q4 2023',
      type: 'Impact Report',
      size: '3.2 MB',
      uploadDate: '2024-01-15',
      status: 'Published',
      description: 'Quarterly impact assessment and beneficiary statistics'
    },
    {
      id: '2',
      name: 'Customs Declaration - Medical Supplies',
      type: 'Customs Form',
      size: '890 KB',
      uploadDate: '2024-01-12',
      status: 'Approved',
      description: 'Import documentation for medical equipment shipment'
    },
    {
      id: '3',
      name: 'Donor Transparency Report 2023',
      type: 'Financial Report',
      size: '5.7 MB',
      uploadDate: '2024-01-10',
      status: 'Published',
      description: 'Annual financial transparency and fund allocation report'
    },
    {
      id: '4',
      name: 'Warehouse Inventory Audit',
      type: 'Audit Report',
      size: '1.4 MB',
      uploadDate: '2024-01-08',
      status: 'Internal',
      description: 'Monthly inventory audit and stock verification'
    },
    {
      id: '5',
      name: 'Partnership Agreement - MedSupply Europe',
      type: 'Contract',
      size: '2.1 MB',
      uploadDate: '2024-01-05',
      status: 'Signed',
      description: 'Supply partnership agreement and terms'
    },
    {
      id: '6',
      name: 'Beneficiary Feedback Survey Results',
      type: 'Survey Report',
      size: '4.3 MB',
      uploadDate: '2024-01-03',
      status: 'Draft',
      description: 'Quarterly beneficiary satisfaction and feedback analysis'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Published':
      case 'Approved':
      case 'Signed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Draft':
      case 'Internal':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
      case 'Approved':
      case 'Signed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Draft':
      case 'Internal':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Impact Report':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Financial Report':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Customs Form':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Contract':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'Audit Report':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const publishedCount = documents.filter(doc => doc.status === 'Published').length;
  const draftCount = documents.filter(doc => doc.status === 'Draft').length;
  const totalSize = documents.reduce((sum, doc) => {
    const size = parseFloat(doc.size.split(' ')[0]);
    const unit = doc.size.split(' ')[1];
    return sum + (unit === 'MB' ? size : size / 1000);
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Documents
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage impact reports, customs forms, and organizational documents
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {documents.length}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Total Documents
              </p>
            </div>
          </div>
        </div>
        
        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {publishedCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Published
              </p>
            </div>
          </div>
        </div>

        <div 
          style={gradientStyle}
          className={`rounded-xl p-6 border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <div>
              <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {draftCount}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                Drafts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <div 
            key={doc.id}
            style={gradientStyle}
            className={`rounded-xl p-6 border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <FileText className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {doc.name}
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {doc.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(doc.type)}`}>
                      {doc.type}
                    </span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {doc.size}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className={`w-3 h-3 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                        {doc.uploadDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {getStatusIcon(doc.status)}
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                    <Eye className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  </button>
                  <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                    <Download className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};