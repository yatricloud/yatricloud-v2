import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Greeting } from './components/Greeting/Greeting';
import { Features } from './components/Features/Features';
import { CertifiedTeam } from './components/CertifiedTeam/CertifiedTeam';
import { TeamSection } from './components/Team/TeamSection';
import { ProductsSection } from './components/Products/ProductsSection';
import { PartnershipSection } from './components/Partnership/PartnershipSection';
import { CompaniesSection } from './components/Companies/CompaniesSection';
import { CurriculumSection } from './components/Curriculum/CurriculumSection';
import { Platforms } from './components/Platforms/Platforms';
import { CommunitySection } from './components/Communities/CommunitySection';
import { YouTubeSubscribe } from './components/YouTube/YouTubeSubscribe';
import { LatestVideos } from './components/Videos/LatestVideos';
import { TrustSection } from './components/Trust/TrustSection';
import { FAQSection } from './components/FAQ/FAQSection';
import { Footer } from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { AuthModal } from './components/Auth/AuthModal';
import { WelcomePopup } from './components/WelcomePopup/WelcomePopup';
import { ConsentBanner } from './components/common/ConsentBanner';

// Page imports
import { BlogPage } from './pages/Blog/BlogPage';
import { CoursesPage } from './pages/Courses/CoursesPage';
import { ProductsPage } from './pages/Products/ProductsPage';
import { CommunityPage } from './pages/Community/CommunityPage';
import { SuccessStoriesPage } from './pages/SuccessStories/SuccessStoriesPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { CertificationsPage } from './pages/Certifications/CertificationsPage';
import { LearningPathPage } from './pages/LearningPath/LearningPathPage';
import { CertificationSupportPage } from './pages/CertificationSupport/CertificationSupportPage';
import { ExpertSessionsPage } from './pages/ExpertSessions/ExpertSessionsPage';
import { HandsOnProjectsPage } from './pages/HandsOnProjects/HandsOnProjectsPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { PrivacyPolicy } from './pages/Privacy/PrivacyPolicy';
import { TermsOfService } from './pages/Terms/TermsOfService';

export type PageType = 'home' | 'blog' | 'success-stories' | 'courses' | 'certifications' | 
                'contact' | 'products' | 'community' | 'learning-path' | 
                'certification-support' | 'expert-sessions' | 'hands-on-projects' | 
                'checkout' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const handleAuthClick = (view: 'login' | 'signup') => {
    setAuthView(view);
    setShowAuthModal(true);
    setShowWelcomePopup(false);
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Greeting />
            {/* <CompaniesSection /> */}
            <Features onNavigate={handleNavigate} />
            <YouTubeSubscribe />
            <LatestVideos />
            <CertifiedTeam />
            <TeamSection />
            <ProductsSection />
            <PartnershipSection />
            <CommunitySection />
 
            <CurriculumSection />
            <Platforms />
            <TrustSection />
            <FAQSection />
          </>
        );
      case 'blog':
        return <BlogPage />;
      case 'courses':
        return <CoursesPage onCertificationsClick={() => handleNavigate('certifications')} />;
      case 'products':
        return <ProductsPage />;
      case 'community':
        return <CommunityPage />;
      case 'success-stories':
        return <SuccessStoriesPage />;
      case 'contact':
        return <ContactPage />;
      case 'certifications':
        return <CertificationsPage onNavigate={handleNavigate} />;
      case 'learning-path':
        return <LearningPathPage />;
      case 'certification-support':
        return <CertificationSupportPage />;
      case 'expert-sessions':
        return <ExpertSessionsPage />;
      case 'hands-on-projects':
        return <HandsOnProjectsPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return null;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#040d21]">
        <Header 
          onAuthClick={handleAuthClick}
          onNavigate={handleNavigate}
        />
        
        <main>
          {renderPage()}
        </main>
        
        <Footer onNavigate={handleNavigate} />

        <ConsentBanner />

        <AuthModal 
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          defaultView={authView}
        />

        <WelcomePopup 
          isOpen={showWelcomePopup}
          onClose={() => setShowWelcomePopup(false)}
          onLogin={() => handleAuthClick('login')}
        />
      </div>
    </AuthProvider>
  );
}

export default App;