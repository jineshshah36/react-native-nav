/* @flow */
import React from 'react-native'
const { Text, PropTypes } = React
import styles from '../styles'

function NavButtonText(props: Object): React.Element {
  const { style, children } = props
  return (
    <Text style={[styles.navBarButtonText, style]}>
      {children}
    </Text>
  )
}

NavButtonText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

NavButtonText.defaultProps = {
  style: {},
}

export { NavButtonText }
