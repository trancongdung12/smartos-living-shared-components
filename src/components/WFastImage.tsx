import { Fragment, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import FastImage, { type FastImageProps } from 'react-native-fast-image';
import Colors from '../themes/Colors';
import useLoadingInterpolate from '../utils/hooks/useLoadingInterpolate';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const WFastImage = ({
  source,
  resizeMode = FastImage.resizeMode.cover,
  style,
  children,
}: FastImageProps) => {
  const [loading, setLoading] = useState(true);
  const { interpolatedBackground } = useLoadingInterpolate({ loading });
  const [isError, setIsError] = useState(false);

  return (
    <Fragment>
      {(loading || isError) && (
        <Animated.View
          style={[
            {
              backgroundColor: isError
                ? Colors.primary
                : interpolatedBackground,
            },
            styles.absolute,
            style,
          ]}
        />
      )}
      <AnimatedFastImage
        source={source}
        style={style}
        resizeMode={resizeMode}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => {
          setLoading(false);
        }}
        onError={() => setIsError(true)}
      >
        {children}
      </AnimatedFastImage>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
});

export default WFastImage;
