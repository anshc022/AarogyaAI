import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', patients: 65 },
    { name: 'Feb', patients: 59 },
    { name: 'Mar', patients: 80 },
    { name: 'Apr', patients: 81 },
    { name: 'May', patients: 56 },
    { name: 'Jun', patients: 95 },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'patients', label: 'Patients' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Navigation Bar with Profile */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.png" alt="AarogyaAI" />
              </div>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`inline-flex items-center px-4 py-2 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white hover:bg-indigo-700">
                New Patient
              </button>
              <div className="relative">
                <img
                  className="h-10 w-10 rounded-full border-2 border-gray-200"
                  src="https://randomuser.me/api/portraits/women/24.jpg"
                  alt="User profile"
                />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Sarah</h1>
          <p className="text-gray-600">Here's what's happening with your patients today.</p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Patients', value: '2,431', change: '+4.75%', icon: '👥' },
            { label: 'Critical Cases', value: '15', change: '-2.35%', icon: '🚨' },
            { label: "Today's Appointments", value: '12', icon: '📅' },
            { label: 'Pending Reports', value: '4', icon: '📋' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-2">{stat.icon}</div>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.label}
                  </dt>
                </div>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                  {stat.change && (
                    <span className={`ml-2 text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  )}
                </dd>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="patients" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced AI Insights Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Risk Assessment Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Risk Assessment</h3>
            <div className="mt-5">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                      High Risk Patients
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      30%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
                </div>
              </div>
              {/* Add more risk metrics */}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {[
                  { type: 'New Patient', name: 'Ananya Reddy', time: '30 minutes ago' },
                  { type: 'Lab Results', name: 'Rahul Mehta', time: '2 hours ago' },
                  { type: 'Emergency Admission', name: 'Deepak Sharma', time: '3 hours ago' },
                  { type: 'Treatment Updated', name: 'Priya Malhotra', time: '4 hours ago' },
                  { type: 'AI Alert', name: 'Risk Assessment Update', time: '5 hours ago' }
                ].map((activity, idx) => (
                  <li key={idx} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.name}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">AI Recommendations</h3>
            <ul className="mt-6 space-y-4">
              {[
                'Review critical patient reports',
                'Schedule follow-up for high-risk cases',
                'Update treatment plans based on new AI insights'
              ].map((recommendation, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">{recommendation}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Patient List */}
        <div className="mt-8 bg-white shadow-lg rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Patients
            </h3>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Risk Level
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Visit
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { name: 'Rajesh Kumar', status: 'Active', risk: 'Low', lastVisit: '2 days ago' },
                          { name: 'Priya Sharma', status: 'Critical', risk: 'High', lastVisit: 'Today' },
                          { name: 'Amit Patel', status: 'Stable', risk: 'Medium', lastVisit: '1 week ago' },
                          { name: 'Meera Singh', status: 'Active', risk: 'Low', lastVisit: '3 days ago' },
                          { name: 'Suresh Verma', status: 'Critical', risk: 'High', lastVisit: 'Today' }
                        ].map((patient, idx) => (
                          <tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {patient.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                patient.status === 'Active' ? 'bg-green-100 text-green-800' :
                                patient.status === 'Critical' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {patient.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{patient.risk}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {patient.lastVisit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
