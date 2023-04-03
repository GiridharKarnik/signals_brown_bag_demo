import React from 'react';
import { Heading, SlideLayout } from 'spectacle';
import { Lottie } from '../../components';

import * as signalAnimationData from '../../assets/signal-lottie.json';
import * as reactAnimationData from '../../assets/react-animation.json';

import './Slide1.scss';

export const Slide0: React.FC = () => {
  return (
    <SlideLayout.Center backgroundColor="#282828">
      <Heading>Resurgence of Signals</Heading>
      <div className="broadcast-img-container">
        <Lottie animationData={signalAnimationData} height={600} width={600} loop />
      </div>

      <div className="react-animation-container">
        <Lottie animationData={reactAnimationData} height={600} width={600} loop />
      </div>
    </SlideLayout.Center>
  );
};
