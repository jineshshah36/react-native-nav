/* @flow */
import React from 'react-native'
const { Text, PropTypes } = React
import styles from '../styles'

function NavTitle(props: Object): React.Element {
  const { style, children } = props
  return (
    <Text style={[styles.navBarTitleText, style]}>
      {children}
    </Text>
  )
}

NavTitle.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

NavTitle.defaultProps = {
  style: {},
}

export { NavTitle }
