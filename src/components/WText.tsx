import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  type TextProps,
  type StyleProp,
  type TextStyle,
  type FlexStyle,
} from 'react-native';
import type { TextFontTypes } from '../themes/Fonts';
import Fonts from '../themes/Fonts';

interface RNTextProps extends TextProps {
  type?: TextFontTypes | string;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  fill?: boolean;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  color?: TextStyle['color'];
  underLine?: boolean;
  mTop?: FlexStyle['marginTop'];
  mBottom?: FlexStyle['marginBottom'];
  mLeft?: FlexStyle['marginLeft'];
  mRight?: FlexStyle['marginRight'];
  mHoz?: FlexStyle['marginHorizontal'];
  mVer?: FlexStyle['marginVertical'];
  numberOfLine?: number;
  lineHeight?: number;
  mWidth?: string | number;
}

function WText(props: RNTextProps) {
  const {
    type = 'regular14',
    color,
    center,
    underLine,
    style,
    children,
    mTop,
    mBottom,
    mLeft,
    mRight,
    mHoz,
    mVer,
    fill,
    numberOfLine,
    textAlign,
    lineHeight,
    mWidth,
  } = props;
  return (
   //@ts-ignore
    <RNText
      {...props}
      allowFontScaling={false}
      numberOfLines={numberOfLine}
      style={[
        styles[type as keyof typeof styles],
        color && {color},
        center && styles.center,
        fill && styles.fill,
        underLine && styles.txtUnderline,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        textAlign && {textAlign},
        style,
        lineHeight && {
          lineHeight,
        },
        mWidth && {maxWidth: mWidth},
      ]}>
      {children}
    </RNText>
  );
}
export const styles = StyleSheet.create({
  bold10: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S10,
  },
  bold12: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S12,
  },
  bold13: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S13,
  },
  bold14: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S14,
  },
  bold16: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S16,
  },
  bold18: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S18,
  },
  bold20: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S20,
  },
  bold36: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.S36,
  },
  center: {
    textAlign: 'center',
  },
  fill: {
    flex: 1,
  },
  light10: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S10,
  },
  light12: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S12,
  },
  light14: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S14,
  },
  light16: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S16,
  },
  light18: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S18,
  },
  light20: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.S20,
  },
  medium10: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S10,
  },
  medium11: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S11,
  },
  medium12: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S12,
  },
  medium14: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S14,
  },
  medium16: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S16,
  },
  medium18: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S18,
  },
  medium20: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S20,
  },
  medium24: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S24,
  },
  medium30: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S30,
  },
  normal: {
    fontFamily: Fonts.type.regular,
  },
  regular10: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S10,
  },
  regular12: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S12,
  },
  regular14: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S14,
  },
  regular16: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S16,
  },
  regular18: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S18,
  },
  regular20: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S20,
  },
  regular24: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.S24,
  },
  semiBold10: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S10,
  },
  semiBold12: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S12,
  },
  semiBold14: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S14,
  },
  semiBold16: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S16,
  },
  semiBold18: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S18,
  },
  semiBold20: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S20,
  },
  semiBold24: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S24,
  },
  semiBold6: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.S6,
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
});

export default WText;
