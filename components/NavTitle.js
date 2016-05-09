/* @flow */
import React from 'react';
import { Text, PropTypes } from 'react-native';
import styles from '../styles'

function NavTitle({ style, children }: Object): React.Element {
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
