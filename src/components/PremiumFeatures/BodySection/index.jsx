import React from 'react';
import PlansSection from 'components/PremiumFeatures/BodySection/PlansSection';
import Spacer from 'components/common/Spacer';
import VideoSection from './VideoSection';

function BodySection() {
  return (
    <div>
      <PlansSection />
      <Spacer size={32} />
      <VideoSection />
    </div>
  );
}

export default BodySection;
