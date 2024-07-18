import { useCallback, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import Colors from '../../themes/Colors';
import { getInterpolatedColor, startAnimationHelper } from '../Tools';

const useLoadingInterpolate = ({ loading }: { loading: boolean }) => {
  const [animation] = useState(new Animated.Value(0));
  const startAnimation = useCallback(() => {
    startAnimationHelper(animation, 1600);
  }, [animation]);

  useEffect(() => {
    if (loading) {
      startAnimation();
    }
  }, [loading, startAnimation]);

  const interpolatedBackground = getInterpolatedColor(
    animation,
    Colors.primaryLoading,
    Colors.blackLight4
  );

  return {
    interpolatedBackground,
  };
};

export default useLoadingInterpolate;
