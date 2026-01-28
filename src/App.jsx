// App.jsx (Complete Updated Version)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContentBoxes from './components/ContentBoxes';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ElementorSupport from './components/ElementorSupport';
import LoadingScreen from './components/LoadingScreen';
import StructuredData from './components/StructuredData';
import Scripts from './components/Scripts';
import Featured from './components/Featured';
import ContactUs from './components/ContactUs';
import ContactUsBanner from './components/ContactUsBanner';
import Clients from './components/Clients';

function App() {
  return (
    <>
      <LoadingScreen />
      <StructuredData />

      <div className="elementor elementor-18 min-h-screen">
        <Header />
        <Hero />
        <Services />
        <ContentBoxes />
        <Features />
        <StatsSection />
        <Featured />
        <ContactUs/>
        <ContactUsBanner/>

        <Testimonials />
        <Clients/>
        <Footer />
      </div>

      <ChatWidget />
      <ElementorSupport />
      <Scripts />
    </>
  );
}

export default App;