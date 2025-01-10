//react
import { useState, useEffect } from "react";
//react native
import { Dimensions, PixelRatio } from "react-native";

const useDeviceDimensions = () => {
  const [deviceInfo, setDeviceInfo] = useState(() => {
    const { width, height } = Dimensions.get("window");
    const pixelDensity = PixelRatio.get();
    return {
      width,
      height,
      pixelDensity,
      isSmallDevice: width < 375,
      isHighDensity: pixelDensity > 2,
    };
  });

  useEffect(() => {
    const handleChange = ({ window }) => {
      const { width, height } = window;
      const pixelDensity = PixelRatio.get();
      setDeviceInfo({
        width,
        height,
        pixelDensity,
        isSmallDevice: width < 375,
        isHighDensity: pixelDensity > 2,
      });
    };

    const subscription = Dimensions.addEventListener("change", handleChange);

    return () => subscription?.remove();
  }, []);

  return deviceInfo;
};

export default useDeviceDimensions;
