"use client"
import React from 'react';
import { FaChartSimple } from 'react-icons/fa6';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', inspections: 65, passed: 50 },
  { month: 'Feb', inspections: 59, passed: 45 },
  { month: 'Mar', inspections: 80, passed: 70 },
  { month: 'Apr', inspections: 81, passed: 75 },
  { month: 'May', inspections: 56, passed: 48 },
  { month: 'Jun', inspections: 55, passed: 52 },
];

const mockInspections = [
  { date: '2024-06-15', inspector: 'John Doe', status: 'Passed', action: 'None' },
  { date: '2024-06-14', inspector: 'Jane Smith', status: 'Failed', action: 'Review safety protocols' },
  { date: '2024-06-13', inspector: 'Bob Johnson', status: 'Passed', action: 'None' },
  { date: '2024-06-12', inspector: 'Alice Brown', status: 'Failed', action: 'Address ventilation issues' },
];


const KPICard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-5">
    <div className="flex items-center">
      <div className="flex-shrink-0">
       {icon}
      </div>
      <div className="ml-5 w-0 flex-1">
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
          <dd>
            <div className="text-lg font-medium text-gray-900">{value}</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
);

const ComplianceDashboard = () => {
  return (

      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Compliance Inspection Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <KPICard title="Total Inspections" value="340" icon={<FaChartSimple />} />
              <KPICard title="Inspections Passed" value="290" icon={<FaChartSimple />} />
              <KPICard title="Inspections Failed" value="50" icon={<FaChartSimple />} />
              <KPICard title="Compliance Rate" value="85%" icon={<FaChartSimple />} />
            </div>
            
            <div className="bg-white rounded-lg shadow mb-8">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Compliance Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="inspections" fill="#8884d8" name="Total Inspections" />
                    <Bar dataKey="passed" fill="#82ca9d" name="Passed Inspections" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Inspections</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inspector</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockInspections.map((inspection, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inspection.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inspection.inspector}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              inspection.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {inspection.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inspection.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Add New Inspection
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                View Detailed Reports
              </button>
            </div>
          </div>
        </main>
      </>
    
  );
};

export default ComplianceDashboard;