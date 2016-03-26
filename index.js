import React from 'react-native'
const {
  Component,
  Text,
  View,
  PropTypes,
  Platform,
} = React
import StatusBarEnhanced from './components/StatusBarEnhanced'
import NavButton from './components/NavButton'
import styles from './styles'

class NavigationBar extends Component {

  static propTypes = {
    tintColor: PropTypes.string,
    statusBarTintColor: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.shape({
        text: PropTypes.string,
      }),
      PropTypes.element,
    ]),
    statusBarIOS: PropTypes.object,
    statusBarAndroid: PropTypes.object,
    style: PropTypes.object,
    buttonsIOS: PropTypes.array,
    buttonsAndroid: PropTypes.array,
    children: PropTypes.node,
  }

  static defaultProps = {
    statusBarTintColor: '#fff',
    title: {},
    style: {},
    buttonsIOS: [],
    buttonsAndroid: [],
  }

  getTitleElement(): React.Element {
    const { style, title } = this.props
    return (
      <Text style={[styles.navBarTitleText, style.navBarTitleText]}>
        {title.text}
      </Text>
    )
  }

  getAndroidButtons(): Array {
    const { buttonsAndroid, style } = this.props
    return buttonsAndroid.map(
      (button: Object, index: number) => (
        <NavButton key={index}
          style={style}
          button={button}
        />
      )
    )
  }

  getNavBar(): React.Element {
    const { title, style, buttonsIOS } = this.props
    if (Platform.OS === 'ios') {
      if (buttonsIOS.length > 2) {
        throw new Error('iOS navbar only supports a maximum of 2 buttons')
      }
      return (
        <View style={[styles.navBar, styles.navBarIOS, style.navBarIOS]}>
          <View>
            <NavButton style={style}
              button={buttonsIOS[0]}
            />
          </View>
          {this.getTitleElement()}
          <View>
            <NavButton style={style}
              button={buttonsIOS[1]}
            />
          </View>
        </View>
      )
    } else if (Platform.OS === 'android') {
      return (
        <View style={[styles.navBar, styles.navBarAndroid, style.navBarAndroid]}>
          {this.getTitleElement(title)}
          <View style={{ flexDirection: 'row' }}>
            {this.getAndroidButtons()}
          </View>
        </View>
      )
    }
    return null
  }

  render(): React.Element {
    const { style, statusBarIOS, statusBarAndroid, children } = this.props
    return (
      <View style={[styles.navBarContainer, style.navBarContainer]}>
        <StatusBarEnhanced style={style}
          statusBarIOS={statusBarIOS}
          statusBarAndroid={statusBarAndroid}
        />
        {children}
      </View>
    )
  }
}

module.exports = NavigationBar
