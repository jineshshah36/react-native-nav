import React from 'react-native'
const {
  Component,
  Text,
  View,
  PropTypes,
  Platform,
} = React
import StatusBarEnhanced from './components/StatusBarEnhanced'
import NavbarButtonEnhanced from './components/NavbarButtonEnhanced'
import styles from './styles'

const ButtonShape = {
  title: PropTypes.string,
  style: PropTypes.any,
  handler: PropTypes.func,
}

const TitleShape = {
  title: PropTypes.string,
  tintColor: PropTypes.string,
}

class NavigationBar extends Component {

  static propTypes = {
    tintColor: PropTypes.string,
    statusBarTintColor: PropTypes.string,
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
    ]),
    statusBarIOS: PropTypes.object,
    statusBarAndroid: PropTypes.object,
    style: PropTypes.object,
    buttonsIOS: PropTypes.array,
    buttonsAndroid: PropTypes.array,
  }

  static defaultProps = {
    statusBarTintColor: '#fff',
    title: {},
    style: {},
    buttonsIOS: [],
    buttonsAndroid: [],
  }

  getTitleElement(data: Object): React.Element {
    const { style } = this.props
    return (
      <Text style={[styles.navBarTitleText, style.navBarTitleText]}>
        {data.title}
      </Text>
    )
  }

  getAndroidButtons(): Array {
    const { buttonsAndroid, style } = this.props
    return buttonsAndroid.map(
      (button: Object, index: number) => (
        <NavbarButtonEnhanced key={index}
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
            <NavbarButtonEnhanced style={style}
              button={buttonsIOS[0]}
            />
          </View>
          {this.getTitleElement(title)}
          <View>
            <NavbarButtonEnhanced style={style}
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
    const { style, statusBarIOS, statusBarAndroid } = this.props
    return (
      <View style={[styles.navBarContainer, style.navBarContainer]}>
        <StatusBarEnhanced style={style}
          statusBarIOS={statusBarIOS}
          statusBarAndroid={statusBarAndroid}
        />
        {this.getNavBar()}
      </View>
    )
  }
}

module.exports = NavigationBar
