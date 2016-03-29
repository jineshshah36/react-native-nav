/* @flow */
import React from 'react-native'
const { Platform, TouchableOpacity, View, PropTypes } = React
import styles from '../styles'

function NavButton(props: Object): React.Element {
  const getNavBarButtonStyles = (): Array<Object> => {
    const { style } = props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonIOS,
        style,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonAndroid,
        style,
      ]
    }
    return []
  }

  const getTouchable = (): React.Element => {
    const { onPress, children } = props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={getNavBarButtonStyles}>
          {children}
        </View>
      </TouchableOpacity>
    )
  }

  return getTouchable
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
