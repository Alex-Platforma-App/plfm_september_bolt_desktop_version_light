import React from 'react';
import { Heart, MapPin, Users, Euro, Calendar, TrendingUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const DonorProjects: React.FC = () => {
  const { theme } = useTheme();

  const gradientStyle = {
    background: theme === 'dark' 
      ? 'linear-gradient(135deg, #171c29 0%, #1a1f2e 33%, #1f2535 66%, #252b3d 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 33%, #f1f3f4 66%, #e5e7eb 100%)'
  };

  const fundedProjects = [
    {
      id: '1',
      title: 'Winter Aid Campaign - Kyiv Oblast',
      organization: 'Ukrainian Red Cross',
      location: 'Kyiv Oblast',
      funded: 2500,
      goal: 5000,
      beneficiaries: 347,
      status: 'Active',
      startDate: '2024-01-01',
      description: 'Providing thermal blankets and winter clothing to displaced families'
    },
    {
      id: '2',
      title: 'Medical Equipment for Kharkiv Hospital',
      organization: 'MSF Ukraine',
      location: 'Kharkiv Oblast',
      funded: 8900,
      goal: 10000,
      beneficiaries: 1200,
      status: 'Nearly Complete',
      startDate: '2023-12-15',
      description: 'Essential medical equipment and supplies for regional hospital'
    },
    {
      id: '3',
      title: 'School Supplies for Displaced Children',
      organization: 'Save the Children Ukraine',
      location: 'Lviv Oblast',
      funded: 1200,
      goal: 1200,
      beneficiaries: 89,
      status: 'Completed',
      startDate: '2023-11-20',
      description: 'Educational materials and supplies for children in evacuation centers'
    },
    {
      id: '4',
      title: 'Water Purification - Zaporizhzhia',
      organization: 'UNICEF Ukraine',
      location: 'Zaporizhzhia Oblast',
      funded: 3400,
      goal: 6000,
      beneficiaries: 567,
      status: 'Active',
      startDate: '2024-01-05',
      description: 'Clean water access and purification systems for affected communities'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Active':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Nearly Complete':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Funded Projects
        </h2>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>
          Track the impact of your humanitarian aid contributions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {fundedProjects.map((project) => {
          const progressPercentage = (project.funded / project.goal) * 100;
          
          return (
            <div 
              key={project.id}
              style={gradientStyle}
              className={`rounded-xl p-6 border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className={`w-4 h-4 ${theme === 'dark' ? 'text-red-400' : 'text-red-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                        {project.organization}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                        {project.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}>
                        Started {project.startDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Funding Progress
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    €{project.funded.toLocaleString()} / €{project.goal.toLocaleString()}
                  </span>
                </div>
                <div className={`w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2`}>
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className={`w-4 h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>
                      {project.beneficiaries} beneficiaries
                    </span>
                  </div>
                  <span className={`font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {Math.round(progressPercentage)}% funded
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};