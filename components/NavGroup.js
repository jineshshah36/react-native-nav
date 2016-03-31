/* @flow */
import React from 'react-native'
const { View, PropTypes } = React
import styles from '../styles'

function NavGroup({ style, children }: Object): React.Element {
  return (
    <View style={[styles.navGroup, style]}>
      {children}
    </View>
  )
}

NavGroup.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

NavGroup.defaultProps = {
  style: {},
}

export { NavGroup }
