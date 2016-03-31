/* @flow */
import React from 'react-native'
const { Platform, View, PropTypes, StatusBar } = React
import styles from '../styles'

function StatusBarEnhanced({ statusBar, style }: Object): React.Element {
  const getConfig = (): Object => {
    if (Platform.OS === 'ios') {
      const statusBarConfig = {
        animated: true,
        hidden: false,
        barStyle: 'default',
        networkActivityIndicatorVisible: true,
        showHideTransition: 'fade',
      }
      return Object.assign({}, statusBarConfig, statusBar)
    } else if (Platform.OS === 'android') {
      const statusBarConfig = {
        animated: true,
        hidden: false,
        showHideTransition: 'fade',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        translucent: true,
      }
      return Object.assign({}, statusBarConfig, statusBar)
    }
    return {}
  }

  const getStyles = (): Array<Object> => {
    if (Platform.OS === 'ios') {
      return [
        styles.statusBarIOS,
        style,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.statusBarAndroid,
        style,
      ]
    }
    return [{}]
  }

  return (
    <View style={getStyles()}>
      <StatusBar {...getConfig()} />
    </View>
  )
}

StatusBarEnhanced.propTypes = {
  statusBar: PropTypes.object,
  style: View.propTypes.style,
}

StatusBarEnhanced.defaultProps = {
  style: {},
  statusBar: {},
}

export { StatusBarEnhanced }
