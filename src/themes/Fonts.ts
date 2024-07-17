interface FontTypes {
  [key: string]: { fontFamily: string; fontSize: number };
}

interface FontSizes {
  [key: string]: number;
}

interface MulishType {
  [key: string]: string;
}

type FontWeightType = 'bold' | 'light' | 'medium' | 'regular' | 'semiBold';

type FontSizeType =
  | '6'
  | '8'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '26'
  | '28'
  | '30'
  | '36'
  | '40'
  | '48';

export type TextFontTypes = `${FontWeightType}${FontSizeType}`;

export const type: MulishType = {
  bold: 'PlusJakartaSans-Bold',
  light: 'PlusJakartaSans-Light',
  medium: 'PlusJakartaSans-Medium',
  regular: 'PlusJakartaSans-Regular',
  semiBold: 'PlusJakartaSans-SemiBold',
  thin: 'PlusJakartaSans-ExtraLight',
};

export const size: FontSizes = {
  S6: 6,
  S8: 8,
  S10: 10,
  S11: 11,
  S12: 12,
  S13: 13,
  S14: 14,
  S16: 16,
  S17: 17,
  S18: 18,
  S20: 20,
  S22: 22,
  S24: 24,
  S26: 26,
  S28: 28,
  S30: 30,
  S34: 34,
  S36: 36,
  S40: 40,
  S48: 48,
};

const fontWeights = ['bold', 'light', 'medium', 'regular', 'semiBold'];
const fontTypes: FontTypes = {};

fontWeights.forEach((weight) => {
  Object.entries(size).forEach(([_, sizeValue]) => {
    const key = `${weight}${sizeValue}`;
    fontTypes[key] = {
      fontFamily: type[weight as keyof typeof type] as string,
      fontSize: sizeValue,
    };
  });
});

export default {
  size,
  type,
  fontTypes,
  fontWeights,
};
