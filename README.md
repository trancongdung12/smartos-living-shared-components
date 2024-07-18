# smartos-living-shared-components

UI components

## Installation

```sh
npm install smartos-living-shared-components
```

## Usage

```js
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
        <WIcon name="ic-alltype" size={20} />
      </WTouchable>
    </WView>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
