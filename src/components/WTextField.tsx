import React, { forwardRef, useState, type Ref } from 'react';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  type KeyboardTypeOptions,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import WTouchable from './WTouchable';
import Fonts, { type TextFontTypes } from '../themes/Fonts';
import WText from './WText';
import Colors from '../themes/Colors';
import { SCREEN_WIDTH } from '../themes/Constants';
import WIcon from './WIcon';

interface WTextFieldProps extends TextInputProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  textInputWrap?: StyleProp<ViewStyle>;
  errorMessage?: string;
  textInputStyle?: StyleProp<TextStyle>;
  type?: TextFontTypes | string;
  width?: number;
  touched?: boolean;
  required?: boolean;
  enable?: boolean;
  icon?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onClickIcon?: () => void;
  titleType?: string;
  value?: string;
}

const ICON_PROPERTY = {
  color: Colors.grey3,
  size: 18,
};

interface KeyboardType {
  [key: string]: string;
}

const getKeyBoardType = (type: string | undefined) => {
  const keyboardType: KeyboardType = {
    email: 'email-address',
    number: 'numeric',
    phone: 'phone-pad',
  };
  return (keyboardType[type as string] as KeyboardTypeOptions) || 'default';
};

function FlatInput(
  {
    enable = true,
    defaultValue,
    value,
    onChangeText,
    onSubmitEditing,
    onClickIcon,
    placeholder,
    placeholderTextColor = Colors.grey5,
    autoCapitalize,
    style,
    textInputWrap,
    textInputStyle,
    secureTextEntry,
    errorMessage,
    type,
    returnKeyType,
    title,
    required,
    width,
    icon,
    touched,
    titleType = 'medium14',
  }: WTextFieldProps,
  inputRef: React.LegacyRef<TextInput> | undefined | Ref<TextInput>
) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const _onChangeText = (text: string) => {
    onChangeText?.(text);
  };

  const _onSubmitEditing = () => {
    Keyboard.dismiss();
    onSubmitEditing?.();
  };

  const onChangeSecureState = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View
      style={[styles.container, style, { width: width || SCREEN_WIDTH - 32 }]}
    >
      {title && (
        <WText color={Colors.grey1} mBottom={7} type={titleType}>
          {title}
          {required && (
            <WText color={Colors.red} type={titleType}>
              {' *'}
            </WText>
          )}
        </WText>
      )}
      <WTouchable
        onPress={onClickIcon}
        style={[
          styles.textInputWrap,
          textInputWrap,
          !enable && { backgroundColor: Colors.backgroundF7 },
          {
            borderColor:
              touched && errorMessage ? Colors.borderError : Colors.borderColor,
          },
        ]}
      >
        {type === 'number' ? (
          <CurrencyInput
            allowFontScaling={false}
            autoCapitalize={autoCapitalize || 'none'}
            autoCorrect={false}
            blurOnSubmit={false}
            clearButtonMode={enable ? 'always' : 'never'}
            defaultValue={defaultValue}
            delimiter=","
            editable={enable}
            keyboardType={getKeyBoardType(type)}
            minValue={0}
            onChangeValue={(number: number) => {
              _onChangeText(number?.toString()!);
            }}
            onSubmitEditing={_onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || Colors.grey4}
            precision={0}
            ref={inputRef}
            returnKeyType={returnKeyType || 'done'}
            secureTextEntry={isSecure}
            style={[styles.textInput, textInputStyle]}
            underlineColorAndroid="transparent"
            value={parseFloat(value!)}
          />
        ) : (
          <TextInput
            allowFontScaling={false}
            autoCapitalize={autoCapitalize || 'none'}
            autoCorrect={false}
            blurOnSubmit={false}
            clearButtonMode={enable ? 'always' : 'never'}
            defaultValue={defaultValue}
            editable={enable}
            keyboardType={getKeyBoardType(type)}
            onChangeText={_onChangeText}
            onSubmitEditing={_onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor || Colors.grey4}
            ref={inputRef}
            returnKeyType={returnKeyType || 'done'}
            secureTextEntry={isSecure}
            style={[styles.textInput, textInputStyle]}
            underlineColorAndroid="transparent"
          />
        )}

        {!!icon && (
          <WIcon
            color={ICON_PROPERTY.color}
            name={icon}
            size={ICON_PROPERTY.size}
            style={styles.paddingIcon}
          />
        )}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={onChangeSecureState}
            style={styles.iconWrap}
          >
            <WIcon
              color={ICON_PROPERTY.color}
              name={isSecure ? 'ic-eye-slash' : 'ic-eye'}
              size={ICON_PROPERTY.size}
            />
          </TouchableOpacity>
        )}
      </WTouchable>
      {/* {touched && errorMessage && (
        <WView alignCenter mTop={4} row>
          <Icon color={Colors.borderError} name={'ic-info'} size={16} />
          <WText color={Colors.borderError} mLeft={4} type="regular10">
            {errorMessage}
          </WText>
        </WView>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  errorText: {
    paddingTop: 4,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
  },
  paddingIcon: {
    paddingRight: 12,
  },
  textInput: {
    color: Colors.grey1,
    flex: 1,
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.S14,
    height: 40,
    paddingHorizontal: 15,
  },
  textInputWrap: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
  },
});

export default forwardRef(FlatInput);
