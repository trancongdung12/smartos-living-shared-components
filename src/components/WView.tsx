import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  type StyleProp,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import WText from './WText';

export interface WViewProps extends ViewProps {
  fill?: boolean;
  textLoading?: string;
  textLoadingColor?: string;
  bgColorIndicator?: string;
  sizeIndicator?: 'small' | 'large';
  bgColorLoading?: string;
  loadingColor?: string;
  loading?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  center?: boolean;
  wrap?: boolean;
  style?: StyleProp<ViewStyle>;
  mTop?: number | string;
  mBottom?: number;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number | string;
  w?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderTopColor?: string;
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
  absolute?: boolean;
  opacity?: number;
  aTop?: number;
  aBottom?: number;
  aLeft?: number;
  aRight?: number;
  tabLabel?: string;
  margin?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomWidth?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomColor?: string;
  padding?: number;
}

function WView({
  fill,
  children,
  row,
  column,
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
  absolute,
  opacity,
  aTop = 0,
  aBottom = 0,
  aRight = 0,
  aLeft = 0,
  margin,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomWidth,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  wrap,
  loading,
  textLoading,
  textLoadingColor,
  bgColorIndicator,
  bgColorLoading,
  sizeIndicator = 'large',
  maxHeight,
  minHeight,
  minWidth,
  maxWidth,
  loadingColor,
  ...more
}: WViewProps) {
  return (
    // @ts-ignore
    <View
      {...more}
      style={[
        fill && styles.fill,
        row && styles.row,
        column && styles.column,
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
        margin && { margin },
        borderBottomWidth && { borderBottomWidth },
        borderBottomColor && { borderBottomColor },
        borderTopRightRadius && { borderTopRightRadius },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderBottomLeftRadius && { borderBottomLeftRadius },
        borderBottomRightRadius && { borderBottomRightRadius },
        color && { backgroundColor: color },
        h && { height: h },
        w && { width: w },
        maxHeight && { maxHeight },
        minHeight && { minHeight },
        minWidth && { minWidth },
        maxWidth && { maxWidth },
        borderRadius && { borderRadius },
        borderWidth && { borderWidth },
        borderColor && { borderColor },
        justifyContent && { justifyContent },
        alignItems && { alignItems },
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          bottom: aBottom,
          left: aLeft,
          right: aRight,
          top: aTop,
        },
        opacity && { opacity },
        wrap && styles.wrap,
        style && style,
      ]}
    >
      {loading ? (
        <View
          style={[styles.loadingContainer, { backgroundColor: bgColorLoading }]}
        >
          <View
            style={[styles.indicator, { backgroundColor: bgColorIndicator }]}
          >
            <ActivityIndicator
              color={loadingColor ? loadingColor : 'transparent'}
              size={sizeIndicator}
            />
            {textLoading && (
              <WText
                color={textLoadingColor}
                mTop={8}
                textAlign="center"
                type="regular12"
              >
                {textLoading}
              </WText>
            )}
          </View>
        </View>
      ) : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  alignCenter: {
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  fill: {
    flex: 1,
  },
  indicator: {
    alignItems: 'center',
    borderRadius: 12,
    height: 120,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 120,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    elevation: 1,
    justifyContent: 'center',
    zIndex: 10000,
  },
  row: {
    flexDirection: 'row',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});

export default WView;
