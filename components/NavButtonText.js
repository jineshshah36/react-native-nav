/* @flow */
import React from 'react';
import { Text, PropTypes } from 'react-native';
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
