import React from 'react';
import { FileText, Download, Upload, Eye, Calendar } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const SupplierDocuments: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const documents = [
    {
      id: '1',
      name: 'CE Certification - N95 Masks',
      type: 'Certification',
      size: '2.4 MB',
      uploadDate: '2024-01-10',
      status: 'Verified'
    },
    {
      id: '2',
      name: 'Product Catalog 2024',
      type: 'Catalog',
      size: '8.7 MB',
      uploadDate: '2024-01-08',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Quality Assurance Report',
      type: 'Report',
      size: '1.2 MB',
      uploadDate: '2024-01-05',
      status: 'Verified'
    },
    {
      id: '4',
      name: 'Supplier Agreement',
      type: 'Contract',
      size: '456 KB',
      uploadDate: '2023-12-15',
      status: 'Signed'
    },
    {
      id: '5',
      name: 'Insurance Certificate',
      type: 'Insurance',
      size: '890 KB',
      uploadDate: '2023-12-01',
      status: 'Valid'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
      case 'Active':
      case 'Valid':
      case 'Signed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Expired':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Documents
          </h2>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
            Manage certifications, contracts, and compliance documents
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
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
                  <div className="flex items-center space-x-4 mt-1">
                    <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
                      {doc.type} • {doc.size}
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
                <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(doc.status)}`}>
                  {doc.status}
                </span>
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