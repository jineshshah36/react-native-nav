/* @flow */
import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from '../styles'

function NavTitle({ style, children }: Object): React.Element {
  return (
    <Text accessibilityTraits="header" style={[styles.navBarTitleText, style]}>
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
