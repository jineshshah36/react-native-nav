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
    statusBarIOS: PropTypes.object,
    statusBarAndroid: PropTypes.object,
    style: PropTypes.object,
  }

  static defaultProps = {
    statusBarTintColor: '#fff',
    style: {},
    statusBarIOS: {},
    statusBarAndroid: {},
  }

  getConfig(): Object {
    const { statusBarIOS, statusBarAndroid } = this.props
    if (Platform.OS === 'ios') {
      const statusBarConfig = {
        animated: true,
        hidden: false,
        barStyle: 'default',
        networkActivityIndicatorVisible: true,
        showHideTransition: 'fade',
      }
      return Object.assign({}, statusBarConfig, statusBarIOS)
    } else if (Platform.OS === 'android') {
      const statusBarConfig = {
        animated: true,
        hidden: false,
        showHideTransition: 'fade',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        translucent: true,
      }
      return Object.assign({}, statusBarConfig, statusBarAndroid)
    }
    return null
  }

  getStyles(): Array {
    const { style } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.statusBarIOS,
        style.statusBarIOS,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.statusBarAndroid,
        style.statusBarAndroid,
      ]
    }
    return null
  }

  render(): React.Element {
    const config: Object = this.getConfig()
    const stylesConfig: Array = this.getStyles()
    return (
      <View style={stylesConfig}>
        <StatusBar {...config} />
      </View>
    )
  }
}
