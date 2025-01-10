import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const pixelDensity = PixelRatio.get();

const isSmallDevice = width < 375; // Dispositivos pequeños (pantallas de menos de 375px)
const isHighDensity = pixelDensity > 2;

export { width, height, pixelDensity, isSmallDevice, isHighDensity };
