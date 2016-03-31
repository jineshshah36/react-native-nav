/* @flow */
import React from 'react-native'
const {
  View,
  PropTypes,
  Platform,
} = React
import { StatusBarEnhanced } from './components/StatusBarEnhanced'
export { NavGroup } from './components/NavGroup'
export { NavButton } from './components/NavButton'
export { NavButtonText } from './components/NavButtonText'
export { NavTitle } from './components/NavTitle'
import styles from './styles'

function NavigationBar({ style, children, statusBar }: Object): React.Element {
  const getNavBar = (): React.Element => {
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

  return (
    <View style={[styles.navBarContainer, style.navBarContainer]}>
      <StatusBarEnhanced style={style.statusBar}
        statusBar={statusBar}
      />
      {getNavBar()}
    </View>
  )
}

NavigationBar.propTypes = {
  statusBar: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node,
}

NavigationBar.defaultProps = {
  style: {},
  statusBar: {},
}

export default NavigationBar
