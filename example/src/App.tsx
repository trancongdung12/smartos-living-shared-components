import {
  WIcon,
  WText,
  WTouchable,
  WView,
} from 'smartos-living-shared-components';

export default function App() {
  return (
    <WView fill center>
      <WText type="bold20">Hello world!</WText>

      <WTouchable>
        <WText type="bold20">Touch me!</WText>
        <WIcon name="ic-add" size={20} />
      </WTouchable>
    </WView>
  );
}
