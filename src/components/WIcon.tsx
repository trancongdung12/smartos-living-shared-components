import type { StyleProp, TextStyle } from 'react-native';
import IconSmartos from '../smartos-v3';

interface WIconProps {
  name: string;
  size?: number; // Optional prop with a default value
  color?: string; // Optional prop with a default value
  style?: StyleProp<TextStyle>;
}

const WIcon = (props: WIconProps) => <IconSmartos {...props} />;

export default WIcon;
