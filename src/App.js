import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import Recommendations from './components/Recommendations';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AarogyaAI</h1>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
              <div className="bg-gray-50">
                <Dashboard />
              </div>
            } />
            <Route path="/patient-form" element={<PatientForm />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/careers" element={<div>Careers Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy</div>} />
            <Route path="/terms" element={<div>Terms of Service</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
