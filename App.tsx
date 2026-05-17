
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
import MasterClass from './pages/MasterClass';
import MasterClassDetail from './pages/MasterClassDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageType, courseId?: string) => {
    setCurrentPage(page);
    if (page === PageType.MASTER_CLASS_DETAILS) {
      setSelectedCourseId(courseId);
    } else {
      setSelectedCourseId(undefined);
    }
  };

  useEffect(() => {
    console.log('✅ App component mounted successfully');
    console.log('Current page:', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    try {
      switch (currentPage) {
        case PageType.HOME: return <Home onNavigate={handleNavigate} />;
        case PageType.ABOUT: return <About onNavigate={handleNavigate} />;
        case PageType.SERVICES: return <Services onNavigate={handleNavigate} />;
        case PageType.AI_AUTOMATION: return <AIAutomation onNavigate={handleNavigate} />;
        case PageType.SAAS_DEV: return <SaaSDevelopment onNavigate={handleNavigate} />;
        case PageType.MOBILE_CLOUD_APPS: return <MobileCloudApps onNavigate={handleNavigate} />;
        case PageType.CYBERSECURITY: return <Cybersecurity onNavigate={handleNavigate} />;
        case PageType.IT_OUTSOURCING: return <ITOutsourcing onNavigate={handleNavigate} />;
        case PageType.DIGITAL_MARKETING: return <DigitalMarketing onNavigate={handleNavigate} />;
        case PageType.SAP_TRAINING: return <SapTraining onNavigate={handleNavigate} />;
        case PageType.MASTER_CLASS: return <MasterClass onNavigate={handleNavigate} />;
        case PageType.MASTER_CLASS_DETAILS:
          return selectedCourseId ? (
            <MasterClassDetail courseId={selectedCourseId} onNavigate={handleNavigate} />
          ) : (
            <MasterClass onNavigate={handleNavigate} />
          );
        case PageType.CORP_TRAINING: return <Training onNavigate={handleNavigate} />;
        case PageType.UNI_TRAINING:
        case PageType.COLLEGE_TRAINING: return <CollegeTraining onNavigate={handleNavigate} />;
        case PageType.CUSTOM_TRAINING: return <CustomTraining onNavigate={handleNavigate} />;
        case PageType.PRICING: return <Pricing onNavigate={handleNavigate} />;
        case PageType.CONTACT: return <Contact onNavigate={handleNavigate} />;
        case PageType.CONTACT_SUCCESS: return <ContactSuccess onNavigate={handleNavigate} />;
        case PageType.ADMIN_PORTAL: return <AdminPortal onNavigate={handleNavigate} />;
        default: return <Home onNavigate={handleNavigate} />;
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
