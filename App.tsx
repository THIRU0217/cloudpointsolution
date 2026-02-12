
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { PageType } from './types';

// Importing page contents dynamically
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AIAutomation from './pages/AIAutomation';
import SaaSDevelopment from './pages/SaaSDevelopment';
import MobileCloudApps from './pages/MobileCloudApps';
import Cybersecurity from './pages/Cybersecurity';
import ITOutsourcing from './pages/ITOutsourcing';
import DigitalMarketing from './pages/DigitalMarketing';
import Training from './pages/Training';
import SapTraining from './pages/SapTraining';
import CollegeTraining from './pages/CollegeTraining';
import CustomTraining from './pages/CustomTraining';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ContactSuccess from './pages/ContactSuccess';
import AdminPortal from './pages/AdminPortal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);

  useEffect(() => {
    console.log('✅ App component mounted successfully');
    console.log('Current page:', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    try {
      switch (currentPage) {
        case PageType.HOME: return <Home onNavigate={setCurrentPage} />;
        case PageType.ABOUT: return <About onNavigate={setCurrentPage} />;
        case PageType.SERVICES: return <Services onNavigate={setCurrentPage} />;
        case PageType.AI_AUTOMATION: return <AIAutomation onNavigate={setCurrentPage} />;
        case PageType.SAAS_DEV: return <SaaSDevelopment onNavigate={setCurrentPage} />;
        case PageType.MOBILE_CLOUD_APPS: return <MobileCloudApps onNavigate={setCurrentPage} />;
        case PageType.CYBERSECURITY: return <Cybersecurity onNavigate={setCurrentPage} />;
        case PageType.IT_OUTSOURCING: return <ITOutsourcing onNavigate={setCurrentPage} />;
        case PageType.DIGITAL_MARKETING: return <DigitalMarketing onNavigate={setCurrentPage} />;
        case PageType.SAP_TRAINING: return <SapTraining onNavigate={setCurrentPage} />;
        case PageType.CORP_TRAINING: return <Training onNavigate={setCurrentPage} />;
        case PageType.UNI_TRAINING:
        case PageType.COLLEGE_TRAINING: return <CollegeTraining onNavigate={setCurrentPage} />;
        case PageType.CUSTOM_TRAINING: return <CustomTraining onNavigate={setCurrentPage} />;
        case PageType.PRICING: return <Pricing onNavigate={setCurrentPage} />;
        case PageType.CONTACT: return <Contact onNavigate={setCurrentPage} />;
        case PageType.CONTACT_SUCCESS: return <ContactSuccess onNavigate={setCurrentPage} />;
        case PageType.ADMIN_PORTAL: return <AdminPortal onNavigate={setCurrentPage} />;
        default: return <Home onNavigate={setCurrentPage} />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return <Home onNavigate={setCurrentPage} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
