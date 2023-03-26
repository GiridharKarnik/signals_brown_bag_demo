import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieProps {
  animationData: unknown;
  width: number;
  height: number;
  loop: boolean;
  pauseOnComplete?: boolean;
}

export const Lottie: React.FC<LottieProps> = ({ animationData, width, height, loop, pauseOnComplete }) => {
  animationData = Object.assign({}, animationData);
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
        loop,
      });

      if (pauseOnComplete && lottieInstance.current) {
        lottieInstance.current.addEventListener('loopComplete', () => {
          lottieInstance.current.pause();
        });
      }
    }

    return (): void => {
      lottieInstance.current?.destroy();
    };
  }, [animationData, loop, pauseOnComplete]);

  return <div data-testid="lottie" style={{ width, height }} ref={element} />;
};
