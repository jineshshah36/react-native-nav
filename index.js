import React from 'react-native'
const {
  Component,
  View,
  PropTypes,
  Platform,
} = React
import StatusBarEnhanced from './components/StatusBarEnhanced'
export { NavGroup } from './components/NavGroup'
export { NavButton } from './components/NavButton'
export { NavButtonText } from './components/NavButtonText'
export { NavTitle } from './components/NavTitle'
import styles from './styles'

class NavigationBar extends Component {

  static propTypes = {
    statusBar: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
    statusBar: {},
  }

  getNavBar(): React.Element {
    const { style, children } = this.props
    if (Platform.OS === 'ios') {
      return (
        <View style={[styles.navBar, styles.navBarIOS, style.navBar]}>
          {children}
        </View>
      )
    } else if (Platform.OS === 'android') {
      return (
        <View style={[styles.navBar, styles.navBarAndroid, style.navBar]}>
          {children}
        </View>
      )
    }
    return null
  }

  render(): React.Element {
    const { style, statusBar } = this.props
    return (
      <View style={[styles.navBarContainer, style.navBarContainer]}>
        <StatusBarEnhanced style={style.statusBar}
          statusBar={statusBar}
        />
        {this.getNavBar()}
      </View>
    )
  }
}

export default NavigationBar
