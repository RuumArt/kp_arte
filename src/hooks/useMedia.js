import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';

export const useMedia = () => {
  const { width, height } = useWindowDimensions();
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWideDesktop, setIsWideDesktop] = useState(false);

  const [isHighScreen, setIsHighScreen] = useState(false);
  const [isBigDesktop, setIsBigDesktop] = useState(false);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const desktopWidth = 1439;

    const isWideDesktop_ = width > desktopWidth;
    const isDesktop_ = width <= desktopWidth && width >= 1024;
    const isBigDesktop_ = width >= 1280;
    const isMobile_ = width <= 767;
    const isTablet_ = width <= 1023 && width >= 768;

    setIsTablet(isTablet_);
    setIsMobile(isMobile_);
    setIsDesktop(isDesktop_);
    setIsWideDesktop(isWideDesktop_);
    setIsInitialized(true);
    setIsBigDesktop(isBigDesktop_);
  }, [width]);

  useEffect(() => {
    const isHighScreen_ = height > 1024;
    setIsHighScreen(isHighScreen_);
  }, [height]);

  return {
    isDesktop,
    isMobile,
    isTablet,
    isInitialized,
    isHighScreen,
    isWideDesktop,
    isBigDesktop,
  };
};
