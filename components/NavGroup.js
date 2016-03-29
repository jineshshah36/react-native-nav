/* @flow */
import React from 'react-native'
const { View, PropTypes } = React
import styles from '../styles'

function NavGroup(props: Object): React.Element {
  const { style, children } = props
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
