import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DoctorImage from '../assets/Doctor.png';
import DoctorPatientImage from '../assets/doctor-patient.png'; // Add this import
import Scene3D from './3DScene';

function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Add 3D Scene as background */}
      <Scene3D />

      {/* Add floating particles effect to background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <main className="w-full relative z-10">
        {/* Enhanced Navigation */}
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Aa</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                AarogyaAI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-indigo-600">Login</Link>
              <Link to="/signup" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90">
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Modified Hero Section with glassmorphism */}
        <div className="min-h-screen w-full px-4 flex items-center pt-16">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left relative backdrop-blur-lg bg-white/30 p-8 rounded-2xl glass-dark border border-white/20 hover:border-white/40 transition-all duration-300">
                {/* Enhanced AI Animation Overlay */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-75"></div>
                
                {/* New Floating Elements */}
                <div className="absolute -top-5 right-10 animate-bounce-slow">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                    <span className="text-sm font-medium">AI Processing 🤖</span>
                  </div>
                </div>

                {/* Updated Typography with shorter text */}
                <h1 className="relative z-10">
                  <span className="block text-5xl md:text-7xl font-extrabold text-white opacity-0 animate-fade-in-up drop-shadow-lg" 
                        style={{animationDelay: '0.2s', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                    AI-Powered
                  </span>
                  <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text opacity-0 animate-fade-in-up" 
                        style={{animationDelay: '0.4s', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}>
                    Healthcare
                  </span>
                </h1>

                {/* New Interactive Feature Showcase */}
                <div className="mt-8 space-y-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  {[
                    'Real-time Disease Prediction',
                    'Smart Patient Analytics',
                    'Automated Health Insights'
                  ].map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`transform transition-all duration-300 p-4 rounded-lg ${
                        activeFeature === idx 
                          ? 'bg-white shadow-lg scale-105' 
                          : 'bg-transparent'
                      }`}
                      onMouseEnter={() => setActiveFeature(idx)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activeFeature === idx
                            ? 'bg-indigo-600 text-white'
                            : 'bg-indigo-100 text-indigo-600'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg">
                    Start Free Trial
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link to="/demo" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg">
                    Watch Demo
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Modified Image Section - Clean design without box */}
              <div className="mt-12 md:mt-0 relative opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="relative transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
                  <img 
                    src={DoctorImage} 
                    alt="AI-Powered Healthcare" 
                    className="relative z-10 w-full h-auto max-w-lg mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* AI Processing Indicators - Repositioned */}
                  <div className="absolute top-1/4 -left-4 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-pulse z-20">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-2"></div>
                      <div className="text-sm font-semibold text-gray-800">AI Analysis Active</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping mr-2"></div>
                      <div className="text-sm font-semibold text-gray-800">Processing Medical Data</div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping mr-2"></div>
                      <div className="text-sm font-semibold text-gray-800">ML Models Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add new Patient Care Section after hero and before Features */}
        <div className="relative z-10 min-h-screen w-full px-4 bg-gradient-to-br from-indigo-800/90 to-purple-900/90 backdrop-blur-lg flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side text */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Personalized Patient Care
                </h2>
                <p className="text-xl text-indigo-200 mb-8">
                  Our AI system continuously monitors patient vitals and medical history to provide real-time insights and personalized care recommendations.
                </p>
                <div className="space-y-4">
                  {[
                    "24/7 Patient Monitoring",
                    "Real-time Health Analytics",
                    "Automated Alert System",
                    "Personalized Treatment Plans"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-lg text-indigo-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modified Right side image - Clean design without box */}
              <div className="relative">
                <div className="relative transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
                  <img 
                    src={DoctorPatientImage} 
                    alt="Doctor Examining Patient" 
                    className="relative z-10 w-full h-auto max-w-2xl mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Enhanced floating badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium z-20 shadow-xl">
                    Real-time Analysis
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium z-20 shadow-xl">
                    AI-Powered Diagnostics
                  </div>

                  {/* Enhanced AI indicator */}
                  <div className="absolute top-1/2 -right-8 transform translate-x-1/2 glass-dark p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">Real-time Vitals Monitoring</span>
                    </div>
                  </div>

                  {/* Add subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced How It Works Section */}
        <div className="min-h-screen w-full px-4 bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="text-center mb-20">
              <span className="bg-indigo-50 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full">Our Process</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">How AarogyaAI Works</h2>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered healthcare platform simplifies patient care in three easy steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Data Input',
                  subtitle: 'Quick & Secure',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  description: "Input patient data securely through our intuitive interface",
                  features: [
                    'HIPAA Compliant',
                    'Multi-language Support',
                    'EMR Integration',
                    'Voice Input Available'
                  ],
                  gradient: 'from-blue-500 to-indigo-600'
                },
                {
                  title: 'AI Analysis',
                  subtitle: 'Instant Processing',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  description: "Our advanced AI models analyze the data in real-time",
                  features: [
                    'Multiple AI Models',
                    'Real-time Processing',
                    'Pattern Recognition',
                    'Contextual Analysis'
                  ],
                  gradient: 'from-indigo-600 to-purple-600'
                },
                {
                  title: 'Smart Insights',
                  subtitle: 'Evidence-Based',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  description: "Get actionable insights and treatment recommendations",
                  features: [
                    'Treatment Suggestions',
                    'Risk Assessment',
                    'Follow-up Scheduling',
                    'Progress Tracking'
                  ],
                  gradient: 'from-purple-600 to-pink-600'
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 w-12 border-t-2 border-indigo-200 transform -translate-y-1/2 z-0"></div>
                  )}
                  
                  <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${step.gradient} p-8`}>
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-indigo-100 text-sm">{step.subtitle}</p>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-4">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 mr-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Clinical Decision Support Section */}
        <div className="relative z-10 min-h-screen w-full px-4 bg-gradient-to-br from-indigo-900/95 to-purple-900/95 backdrop-blur-lg flex items-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto max-w-[1400px] py-20 relative">
            <div className="text-center mb-16 relative">
              <span className="inline-block px-4 py-1 bg-indigo-500/10 text-indigo-200 rounded-full text-sm font-medium mb-4">
                AI-Powered Healthcare
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100 mb-6">
                Advanced Clinical Decision Support
              </h2>
              <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">
                Revolutionizing healthcare with state-of-the-art AI models and seamless EMR integration
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Smart Analysis',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  description: 'Advanced AI models process patient data for accurate insights',
                  features: ['BioGPT Integration', 'MedPaLM Analysis', 'ClinicalBERT Processing'],
                  gradient: 'from-blue-500 to-indigo-600'
                },
                {
                  title: 'Seamless EMR',
                  icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
                  description: 'Integrate smoothly with existing healthcare systems',
                  features: ['FHIR Compatible', 'Real-time Sync', 'Secure Data Exchange'],
                  gradient: 'from-indigo-600 to-purple-600'
                },
                {
                  title: 'Clinical Insights',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  description: 'Evidence-based recommendations for better care',
                  features: ['Risk Assessment', 'Treatment Plans', 'Outcome Prediction'],
                  gradient: 'from-purple-600 to-pink-600'
                }
              ].map((feature, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                    {/* Gradient Header */}
                    <div className={`absolute inset-x-0 h-1 top-0 rounded-t-2xl bg-gradient-to-r ${feature.gradient}`}></div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-[1px] mb-6`}>
                      <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-indigo-200 mb-6">{feature.description}</p>

                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-indigo-100">
                          <svg className="w-5 h-5 mr-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modified Features Section with glassmorphism */}
        <div className="relative z-10 min-h-screen w-full px-4 bg-gradient-to-br from-indigo-900/70 to-purple-900/70 backdrop-blur-lg flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                Advanced Clinical Decision Support
              </h2>
              <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">
                Powered by state-of-the-art AI models and seamless EMR integration
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'AI-Powered Analysis',
                  description: 'Utilize BioGPT, MedPaLM, and ClinicalBERT for comprehensive medical analysis and evidence-based recommendations.',
                  features: ['Natural language processing', 'Clinical context understanding', 'Evidence-based insights']
                },
                {
                  title: 'EMR Integration',
                  description: 'Seamless integration with existing healthcare systems using SMART on FHIR and CDS Hooks standards.',
                  features: ['Bi-directional data sync', 'Real-time updates', 'Secure data exchange']
                },
                {
                  title: 'Clinical Decision Support',
                  description: 'Get actionable insights and risk assessments to improve patient outcomes and care planning.',
                  features: ['Treatment recommendations', 'Risk stratification', 'Outcome prediction']
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-indigo-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced How It Works Section with Modern Design */}
        <div className="min-h-screen w-full px-4 bg-gradient-to-br from-white to-indigo-50 flex items-center overflow-hidden relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto max-w-[1400px] py-20 relative">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Simple Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How AarogyaAI Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience healthcare transformation in three simple steps
              </p>
            </div>
            
            {/* Enhanced Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: 'Input Data',
                  subtitle: 'Quick & Secure',
                  description: "Enter patient information through our intuitive interface",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  iconBg: 'from-blue-400 to-indigo-500',
                  perks: ['HIPAA Compliant', 'Voice Input', 'Multi-language', 'EMR Integration'],
                  gradient: 'from-blue-600 to-indigo-600'
                },
                {
                  title: 'AI Analysis',
                  subtitle: 'Real-time Processing',
                  description: "Our AI models analyze data using advanced algorithms",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  iconBg: 'from-indigo-400 to-purple-500',
                  perks: ['Multiple Models', 'Fast Processing', 'High Accuracy', 'Smart Learning'],
                  gradient: 'from-indigo-600 to-purple-600'
                },
                {
                  title: 'Get Results',
                  subtitle: 'Evidence-Based',
                  description: "Receive comprehensive insights and recommendations",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  iconBg: 'from-purple-400 to-pink-500',
                  perks: ['Clear Reports', 'Action Items', 'Risk Scores', 'Follow-ups'],
                  gradient: 'from-purple-600 to-pink-600'
                }
              ].map((step, index) => (
                <div key={index} className="group relative">
                  {/* Connection Lines */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5">
                      <div className="w-full h-full bg-gradient-to-r from-current to-current via-transparent bg-indigo-200/50"></div>
                    </div>
                  )}

                  {/* Enhanced Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white to-indigo-50 shadow-lg flex items-center justify-center z-10 ring-2 ring-white">
                      <span className={`text-sm font-bold bg-gradient-to-r ${step.gradient} text-transparent bg-clip-text`}>
                        {index + 1}
                      </span>
                    </div>

                    {/* Gradient Border */}
                    <div className={`absolute inset-x-0 h-2 top-0 rounded-t-2xl bg-gradient-to-r ${step.gradient}`}></div>
                    
                    {/* Enhanced Icon with Gradient Background */}
                    <div className="relative w-20 h-20 mx-auto mb-8">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.iconBg} blur-lg opacity-50`}></div>
                      <div className={`relative w-full h-full rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 text-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${step.gradient} text-transparent bg-clip-text`}>
                          {step.subtitle}
                        </p>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                      
                      {/* Enhanced Perks Grid */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {step.perks.map((perk, i) => (
                          <div key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                            <span className="text-sm text-gray-600 font-medium">{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section - Full Height */}
        <div className="min-h-screen w-full px-4 bg-indigo-50 flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            {/* Added Header Section */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                Platform Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by advanced AI technology to transform healthcare delivery and patient outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Rest of the features code remains the same */}
              {[
                {
                  title: 'AI-Driven Insights',
                  description: 'Leverage advanced models like BioGPT, MedPaLM, and ClinicalBERT for accurate medical analysis and recommendations.',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  features: ['Multi-model analysis', 'Contextual understanding', 'Evidence-based insights']
                },
                {
                  title: 'Seamless Integration',
                  description: 'Effortlessly integrate with existing EMR systems using SMART on FHIR and CDS Hooks standards.',
                  icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
                  features: ['SMART on FHIR', 'CDS Hooks', 'API support']
                },
                {
                  title: 'Real-Time Predictions',
                  description: 'Get instant insights and predictive analytics for improved patient outcomes and care planning.',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  features: ['Risk assessment', 'Treatment optimization', 'Outcome prediction']
                },
                {
                  title: 'Mobile-Ready',
                  description: 'Access powerful AI insights anywhere with our fully responsive, mobile-first platform.',
                  icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                  features: ['Responsive design', 'Cross-device sync', 'Offline support']
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-indigo-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ and Testimonials Combined - Full Height */}
        <div className="min-h-screen w-full px-4 bg-indigo-50 flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="space-y-32">
              {/* FAQ Section */}
              <div>
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {[
                      {
                        q: "How accurate is the AI diagnosis?",
                        a: "Our AI models achieve 98% accuracy in diagnostic support, validated through extensive clinical trials."
                      },
                      {
                        q: "Is patient data secure?",
                        a: "Yes, we use enterprise-grade encryption and are fully HIPAA-compliant to ensure patient data security."
                      },
                      {
                        q: "Can I integrate with existing systems?",
                        a: "Yes, we offer API integration with major EMR/EHR systems and custom integration solutions."
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div>
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-extrabold text-center mb-12">What Healthcare Providers Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        quote: "This AI platform has revolutionized how we make clinical decisions. It's like having an expert consultant available 24/7.",
                        author: "Dr. Sarah Johnson",
                        role: "Chief of Medicine"
                      },
                      {
                        quote: "The accuracy and speed of the AI recommendations have significantly improved our patient care workflow.",
                        author: "Dr. Michael Chen",
                        role: "Clinical Director"
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-blue-50 p-6 rounded-xl">
                        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Moved to bottom */}
        <div className="min-h-screen w-full px-4 bg-white flex items-center">
          <div className="container mx-auto max-w-[1400px] py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Affordable plans for healthcare providers of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tier: 'Starter',
                  price: '₹7,999',
                  period: '/month',
                  description: 'Perfect for small clinics and individual practitioners',
                  features: [
                    'Up to 100 patients',
                    'Basic AI diagnostics',
                    'Email support',
                    'EMR integration',
                    'Hindi language support'
                  ]
                },
                {
                  tier: 'Professional',
                  price: '₹24,999',
                  period: '/month',
                  description: 'Ideal for growing medical practices and small hospitals',
                  features: [
                    'Up to 1000 patients',
                    'Advanced AI analytics',
                    'Priority 24/7 support',
                    'Custom reports',
                    'Multi-language support',
                    'ABDM integration'
                  ]
                },
                {
                  tier: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'For large hospitals and healthcare networks',
                  features: [
                    'Unlimited patients',
                    'Full API access',
                    'Dedicated support team',
                    'Custom integration',
                    'Training & onboarding',
                    'Multi-center support'
                  ]
                }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-white rounded-xl shadow-md p-8 ${idx === 1 ? 'border-2 border-indigo-500 relative' : ''}`}>
                  {idx === 1 && (
                    <span className="absolute top-0 transform -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{plan.tier}</h3>
                  <p className="text-gray-500 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-medium ${
                    idx === 1 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-50 text-gray-800 hover:bg-indigo-50'
                  }`}>
                    {idx === 2 ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                  {idx !== 2 && (
                    <p className="text-center text-sm text-gray-500 mt-3">
                      No credit card required
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600">All prices are in INR. GST will be charged as applicable.</p>
              <p className="text-gray-600 mt-2">
                Need a custom plan? <a href="/contact" className="text-indigo-600 hover:text-indigo-700">Contact us</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer - Auto Height */}
        <footer className="w-full px-4 py-16 bg-indigo-900 text-white">
          <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-500 hover:text-indigo-100">About</Link></li>
                  <li><Link to="/careers" className="text-gray-500 hover:text-indigo-100">Careers</Link></li>
                  <li><Link to="/contact" className="text-gray-500 hover:text-indigo-100">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-gray-500 hover:text-indigo-100">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-500 hover:text-indigo-100">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-indigo-300 hover:text-indigo-100">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                  </a>
                  <a href="#" className="text-indigo-300 hover:text-indigo-100">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
              <p>&copy; 2024 AarogyaAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default LandingPage;

<style jsx>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>
