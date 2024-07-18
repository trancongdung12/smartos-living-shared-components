import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export default {
  SCREEN_HEIGHT: height,
  SCREEN_WIDTH: width,
};

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
