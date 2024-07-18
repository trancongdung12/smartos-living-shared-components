import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import Colors from '../themes/Colors';
import WIcon from './WIcon';
import WText from './WText';
import WView from './WView';

interface WButtonProps {
  label?: string;
  labelColor?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: string;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: StyleProp<TextStyle>;
  outline?: boolean;
  textStyle?: StyleProp<TextStyle>;
  labelType?: string;
  disabledLabelColor?: string;
  shadow?: boolean;
  defaultStyle?: StyleProp<TextStyle>;
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

const Button = ({
  w,
  h,
  outline,
  loading,
  style,
  disabled,
  textStyle,
  label,
  labelType,
  labelColor = Colors.grey1,
  disabledLabelColor,
  onPress,
  shadow,
  color,
  activeOpacity,
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHoz,
  mVer,
  defaultStyle,
  borderWidth,
  icon,
  iconColor,
  iconSize,
  iconStyle,
}: WButtonProps) => {
  return (
    // @ts-ignore
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[
        { backgroundColor: Colors.primary },
        styles.container,
        style,
        color && { backgroundColor: color },
        disabled && { backgroundColor: Colors.grey6 },
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        shadow && styles.shadow,
        outline && styles.outline,
        defaultStyle && styles.default,
        disabled && { backgroundColor: Colors.grey6 },
        w && { width: w },
        h && { height: h },
        borderWidth && { borderWidth },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <WView row alignCenter>
          {icon && (
            <WIcon
              name={icon}
              size={iconSize || 20}
              color={iconColor || Colors.grey1}
              style={[styles.icon, iconStyle]}
            />
          )}
          <WText
            type={labelType || 'semiBold16'}
            color={labelColor || Colors.primary}
            style={[
              textStyle,
              disabled && { color: disabledLabelColor || Colors.grey5 },
            ]}
          >
            {label}
          </WText>
        </WView>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  default: {
    marginHorizontal: 26,
    marginBottom: 32,
    marginTop: 16,
  },
  icon: { marginRight: 6 },
});
export default Button;
