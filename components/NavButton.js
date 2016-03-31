/* @flow */
import React from 'react-native'
const { Platform, TouchableOpacity, View, PropTypes } = React
import styles from '../styles'

function NavButton({ style, onPress, children }: Object): React.Element {
  let navBarStyles = []
  if (Platform.OS === 'ios') {
    navBarStyles = [styles.navBarButtonIOS, style]
  } else if (Platform.OS === 'android') {
    navBarStyles = [styles.navBarButtonAndroid, style]
  }

  const getTouchable = () => (
    <TouchableOpacity onPress={onPress}>
      <View style={navBarStyles}>
        {children}
      </View>
    </TouchableOpacity>
  )

  return getTouchable()
}

NavButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: View.propTypes.style,
}

NavButton.defaultProps = {
  style: {},
}

export { NavButton }
