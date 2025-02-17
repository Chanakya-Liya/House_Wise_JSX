import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyGrid from '../components/PropertyGrid';
import ViewAllButton from '../components/ViewAllButton';

function HomePage() {
  return (
    <>
      <HeroSection />
      <PropertyGrid sliceValue={6}/>
      <ViewAllButton />
    </>
  );
}

export default HomePage;