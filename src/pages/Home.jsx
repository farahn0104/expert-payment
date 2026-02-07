// App.jsx (Complete Updated Version)
import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StatsSection from '../components/StatsSection';
import ElementorSupport from '../components/ElementorSupport';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import ContentBoxes from '../components/ContentBoxes';
import Featured from '../components/Featured';
import Features from '../components/Features';
import ContactUsBanner from '../components/ContactUsBanner';
import ContactUs from '../components/ContactUs';
import LoadingScreen from '../components/LoadingScreen';
import StructuredData from '../components/StructuredData';
import ChatWidget from '../components/ChatWidget';
import Scripts from '../components/Scripts';

function Home() {
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

export default Home;