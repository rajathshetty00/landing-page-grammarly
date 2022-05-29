import React from 'react';
import PlansSection from 'components/PremiumFeatures/BodySection/PlansSection';
import Spacer from 'components/common/Spacer';
import theme from 'theme';
import VideoSection from './VideoSection';

function BodySection() {
  return (
    <div>
      <PlansSection />
      <Spacer sx={{ height: theme.spacing(4) }} />
      <VideoSection />
    </div>
  );
}

export default BodySection;
