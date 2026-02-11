// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext'; // Import the ModalProvider
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import InitiativesPage from './pages/InitiativesPage';
import VolunteerPage from './pages/VolunteerPage';
import GalleryPage from './pages/GalleryPage';
import JoinUsPage from './pages/JoinUsPage';
import Apply from "./pages/Apply"
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === '/join-us';

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      {!hideHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
           <Route path="/Apply" element={<Apply />} />
        </Routes>
      </main>
      {!hideHeader && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ModalProvider> {/* Wrap everything with ModalProvider */}
      <Router>
        <AppContent />
      </Router>
    </ModalProvider>
  );
}

export default App;