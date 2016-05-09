/* @flow */
import React from 'react';
import { Platform, TouchableOpacity, View, PropTypes } from 'react-native';
import styles from '../styles';

function NavButton({ style, onPress, children, disabled, disabledStyle }: Object): React.Element {
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
        <TouchableOpacity>
          <View style={navButtonStyles}>
            {children}
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={onPress}>
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
  style: View.propTypes.style,
  disabled: PropTypes.bool,
  disabledStyle: View.propTypes.style,
}

NavButton.defaultProps = {
  style: {},
  disabledStyle: {},
  disabled: false,
}

export { NavButton }
