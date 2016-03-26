import React from 'react-native'
const {
  Platform,
  Text,
  TouchableOpacity,
  Component,
  View,
  PropTypes,
} = React
import styles from '../styles'

export default class NavbarButtonEnhanced extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    button: PropTypes.object,
  }

  static defaultProps = {
    style: {},
    button: {
      title: '',
    },
  }

  getNavBarButtonStyles(): Array {
    const { style, button } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonIOS,
        style.navBarButtonIOS,
        button.navBarButtonStyle,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonAndroid,
        style.navBarButtonAndroid,
        button.navBarButtonStyle,
      ]
    }
    return null
  }

  getNavBarButtonTextStyles(): Array {
    const { style, button } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonText,
        style.navBarButtonTextIOS,
        button.navBarButtonTextStyle,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonText,
        style.navBarButtonTextAndroid,
        button.navBarButtonTextStyle,
      ]
    }
    return null
  }

  getTouchable(): React.Element {
    const { button } = this.props
    return (
      <TouchableOpacity onPress={button.onPress}>
        <View style={this.getNavBarButtonStyles()}>
          <Text style={this.getNavBarButtonTextStyles()}>
            {button.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render(): React.Element {
    return this.getTouchable()
  }
}
