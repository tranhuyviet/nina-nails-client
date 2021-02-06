import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
// import ClassSection from '../../components/ClassSection/ClassSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import Header from '../../components/Header/Header';

const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            {/* <ClassSection /> */}
            <GallerySection />
        </>
    );
};

export default HomePage;
