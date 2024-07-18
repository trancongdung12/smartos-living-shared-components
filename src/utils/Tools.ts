import { Animated } from 'react-native';

export const startAnimationHelper = (
  animation: Animated.Value | Animated.ValueXY,
  duration: number
) => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
    ])
  ).start();
};

export const getInterpolatedColor = (
  animation: Animated.Value,
  primaryColor: string,
  secondaryColor: string
) =>
  animation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      primaryColor.includes('rgb') ? primaryColor : hexToRGB(primaryColor),
      secondaryColor.includes('rgba')
        ? secondaryColor
        : hexToRGB(secondaryColor),
    ],
  });

export const hexToRGB = (hex: string, alpha?: number) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};
