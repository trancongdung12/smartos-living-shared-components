import { Image, StyleSheet, type ImageProps } from 'react-native';

interface WImageProps extends ImageProps {
  flex?: number;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number;
  w?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  selfCenter?: boolean;
  tintColor?: string;
}

function WImage({
  flex,
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
  selfCenter,
  source,
  defaultSource,
  tintColor,
  resizeMode,
}: WImageProps) {
  return (
    <Image
      defaultSource={defaultSource}
      resizeMode={resizeMode}
      source={source}
      style={[
        flex && { flex },
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
        selfCenter && styles.selfCenter,
        tintColor && { tintColor },
        style && style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  selfCenter: {
    alignSelf: 'center',
  },
});

export default WImage;
