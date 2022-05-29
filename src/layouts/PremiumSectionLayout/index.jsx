import FooterSection from 'components/PremiumFeatures/FooterSection';
import TopSection from 'components/PremiumFeatures/TopSection';
import React from 'react';
import BodySection from '../../components/PremiumFeatures/BodySection';

function PremiumSectionLayout() {
  return (
    <>
      <TopSection />
      <BodySection />
      <FooterSection />
    </>
  );
}

export default PremiumSectionLayout;
