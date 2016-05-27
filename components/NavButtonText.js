/* @flow */
import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from '../styles';

function NavButtonText({ style, children }: Object): React.Element {
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
