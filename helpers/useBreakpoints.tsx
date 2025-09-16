import { useMediaQuery } from "./useMediaQuery";

export const useBreakpoints = () => {
  const isXs = useMediaQuery("(max-width: 479px)");
  const isSm = useMediaQuery("(min-width: 480px) and (max-width: 639px)");
  const isMd = useMediaQuery("(min-width: 640px) and (max-width: 767px)");
  const isLg = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isXl = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const is2Xl = useMediaQuery("(min-width: 1280px)");
  
  // Mobile devices (phones)
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  // Tablet devices
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  
  // Desktop devices (laptops and larger)
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Touch devices
  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");
  
  return {
    // Specific breakpoints
    isXs,
    isSm, 
    isMd,
    isLg,
    isXl,
    is2Xl,
    
    // Device categories
    isMobile,
    isTablet, 
    isDesktop,
    isTouchDevice,
    
    // Utility functions
    isAtLeast: {
      sm: useMediaQuery("(min-width: 480px)"),
      md: useMediaQuery("(min-width: 640px)"),
      lg: useMediaQuery("(min-width: 768px)"),
      xl: useMediaQuery("(min-width: 1024px)"),
      "2xl": useMediaQuery("(min-width: 1280px)"),
    },
    
    isAtMost: {
      xs: useMediaQuery("(max-width: 479px)"),
      sm: useMediaQuery("(max-width: 639px)"),
      md: useMediaQuery("(max-width: 767px)"),
      lg: useMediaQuery("(max-width: 1023px)"),
      xl: useMediaQuery("(max-width: 1279px)"),
    }
  };
};