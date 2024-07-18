import React from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import WTouchable from './WTouchable';
import WView from './WView';
import Colors from '../themes/Colors';
import WImage from './WImage';
import WIcon from './WIcon';

interface WAvatarProps {
  imageUrl?: string;
  avatarSize?: number;
  borderWidth?: number;
  borderColor?: string;
  style?: object;
  children?: React.ReactNode;
  loading?: boolean;
  onPress?: () => void;
  icon?: string;
}

const WAvatar = React.memo(
  ({
    imageUrl = '',
    avatarSize = 96,
    style,
    children,
    loading = false,
    onPress,
    borderColor = Colors.transparent,
    borderWidth = 0,
    icon = 'ic-outline-user',
  }: WAvatarProps): React.ReactElement => {
    const size = avatarSize;

    const avatarStyle = {
      borderColor,
      borderRadius: avatarSize / 2,
      borderWidth,
      height: size,
      width: size,
    };

    return (
      <WTouchable
        alignCenter
        disabled={!onPress ? true : false || loading}
        justifyCenter
        onPress={onPress}
        style={[avatarStyle, style]}
      >
        {loading ? (
          <WView
            absolute
            alignCenter
            borderRadius={size / 2}
            color={Colors.grey1}
            justifyCenter
            style={styles.activityIndicator}
          >
            <ActivityIndicator color={Colors.primary} size={'small'} />
          </WView>
        ) : null}
        {children}
        {imageUrl ? (
          <WImage
            borderColor={borderColor}
            borderRadius={size / 2}
            borderWidth={borderWidth}
            h={size}
            source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
            style={[
              {
                ...styles.avatar,
              },
            ]}
            w={size}
          />
        ) : (
          <WView
            borderColor={Colors.grey4}
            borderRadius={size / 2}
            borderWidth={1}
            center
            color={Colors.transparent}
            h={size}
            w={size}
          >
            <Text>Name</Text>
            <WIcon color={Colors.grey3} name={icon} size={size / 2} />
          </WView>
        )}
      </WTouchable>
    );
  }
);

export default WAvatar;

const styles = StyleSheet.create({
  activityIndicator: {
    zIndex: 1000,
  },
  avatar: {
    display: 'flex',
  },
});
