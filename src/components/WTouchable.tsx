import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  type TouchableOpacityProps,
  type ViewStyle,
  type StyleProp,
} from 'react-native';

export interface WTouchableProps extends TouchableOpacityProps {
  fill?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  center?: boolean;
  style?: StyleProp<ViewStyle>;
  mTop?: number | string;
  mBottom?: number | string;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number | string;
  pBottom?: number | string;
  pLeft?: number | string;
  pRight?: number | string;
  pHoz?: number | string;
  pVer?: number | string;
  mHoz?: number | string;
  mVer?: number | string;
  color?: string;
  borderBottomWidth?: number | string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  borderColor?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  selfCenter?: boolean;
  hit?: number | string;
  activeOpacity?: number;
  onPress?: () => void;
}

function WTouchable({
  fill,
  children,
  row,
  alignCenter,
  justifyCenter,
  justifyBetween,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  alignItems,
  selfCenter,
  onPress,
  disabled,
  activeOpacity = 0.5,
  hit,
  borderBottomWidth,
}: WTouchableProps) {
  return (
    // @ts-ignore
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      hitSlop={{
        bottom: hit || 0,
        left: hit || 0,
        right: hit || 0,
        top: hit || 0,
      }}
      onPress={onPress && onPress}
      style={[
        fill && styles.fill,
        row && styles.row,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        justifyBetween && styles.justifyBetween,
        center && styles.center,
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        pTop && { paddingTop: pTop },
        pBottom && { paddingBottom: pBottom },
        pLeft && { paddingLeft: pLeft },
        pRight && { paddingRight: pRight },
        pHoz && { paddingHorizontal: pHoz },
        pVer && { paddingVertical: pVer },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        color && { backgroundColor: color },
        h && { height: h },
        w && { width: w },
        borderRadius && { borderRadius },
        borderWidth && { borderWidth },
        borderColor && { borderColor },
        justifyContent && { justifyContent },
        alignItems && { alignItems },
        selfCenter && styles.selfCenter,
        borderBottomWidth && { borderBottomWidth },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  selfCenter: {
    alignSelf: 'center',
  },
});

export default WTouchable;
