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

export default class NavButton extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    button: PropTypes.object,
    children: PropTypes.node,
    onPress: PropTypes.func,
    navBarButtonTextStyle: Text.propTypes.style,
    navBarButtonStyle: View.propTypes.style,
  }

  static defaultProps = {
    style: {},
    button: {
      title: '',
    },
  }

  getNavBarButtonStyles(): Array {
    const { style, navBarButtonStyle } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonIOS,
        style.navBarButtonIOS,
        navBarButtonStyle,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonAndroid,
        style.navBarButtonAndroid,
        navBarButtonStyle,
      ]
    }
    return null
  }

  getNavBarButtonTextStyles(): Array {
    const { style, navBarButtonTextStyle } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonText,
        style.navBarButtonTextIOS,
        navBarButtonTextStyle,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonText,
        style.navBarButtonTextAndroid,
        navBarButtonTextStyle,
      ]
    }
    return null
  }

  getTouchable(): React.Element {
    const { onPress, children } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.getNavBarButtonStyles()}>
          <Text style={this.getNavBarButtonTextStyles()}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render(): React.Element {
    return this.getTouchable()
  }
}
