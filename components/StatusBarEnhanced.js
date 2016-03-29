/* @flow */
import React from 'react-native'
const {
  Platform,
  Component,
  View,
  PropTypes,
  StatusBar,
} = React
import styles from '../styles'

export default class StatusBarEnhanced extends Component {

  static propTypes = {
    statusBarTintColor: PropTypes.string,
    statusBar: PropTypes.object,
    style: View.propTypes.style,
  }

  static defaultProps = {
    statusBarTintColor: '#fff',
    style: {},
    statusBar: {},
  }

  getConfig(): Object {
    const { statusBar } = this.props
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
    return null
  }

  getStyles(): Array {
    const { style } = this.props
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
    return null
  }

  render(): React.Element {
    const config: Object = this.getConfig()
    return (
      <View style={this.getStyles()}>
        <StatusBar {...config} />
      </View>
    )
  }
}
