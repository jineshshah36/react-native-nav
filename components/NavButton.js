/* @flow */
import React, { PropTypes } from 'react';
import { Platform, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import styles from '../styles';

function NavButton({ style, onPress, children, disabled, disabledStyle, accessibilityLabel }: Object): React.Element {
  let navButtonStyles = []
  if (Platform.OS === 'ios') {
    navButtonStyles = [styles.navBarButtonIOS]
  } else if (Platform.OS === 'android') {
    navButtonStyles = [styles.navBarButtonAndroid]
  }
  if (disabled) {
    navButtonStyles.push(disabledStyle)
  } else {
    navButtonStyles.push(style)
  }

  const getTouchable = (): React.Element => {
    if (disabled) {
      return (
        <TouchableOpacity accessibilityLabel={accessibilityLabel} accessibilityTraits={["button", "disabled"]}>
          <View style={navButtonStyles}>
            {children}
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity accessibilityLabel={accessibilityLabel} onPress={onPress} accessibilityTraits="button">
        <View style={navButtonStyles}>
          {children}
        </View>
      </TouchableOpacity>
    )
  }

  return getTouchable()
}

NavButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
}

NavButton.defaultProps = {
  style: {},
  disabledStyle: {},
  disabled: false,
}

export { NavButton }
