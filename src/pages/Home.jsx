import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PhoneSection from '../components/PhoneSection';
import AudioSection from '../components/AudioSection';
import CMFSection from '../components/CMFSection';
import Footer from '../components/Footer';
import LocationModal from '../components/LocationModal';
import GlyphEffect from '../components/GlyphEffect';
import Animate from '../components/Animate'

const Home = () => {
    const [showLocationModal, setShowLocationModal] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white">

            <GlyphEffect />
            <Header onLocationClick={() => setShowLocationModal(true)} />
            <HeroSection />
            {/* <Animate /> */}
            <PhoneSection />
            <AudioSection />
            <CMFSection />
            <Footer />
            <LocationModal isOpen={showLocationModal} onClose={() => setShowLocationModal(false)} />
        </div>
    );
};

export default Home;
