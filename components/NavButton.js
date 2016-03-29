/* @flow */
import React from 'react-native'
const {
  Platform,
  TouchableOpacity,
  Component,
  View,
  PropTypes,
} = React
import styles from '../styles'

export class NavButton extends Component {
  static propTypes = {
    style: View.propTypes.style,
    children: PropTypes.node,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    style: {},
  }

  getNavBarButtonStyles(): Array {
    const { style } = this.props
    if (Platform.OS === 'ios') {
      return [
        styles.navBarButtonIOS,
        style,
      ]
    } else if (Platform.OS === 'android') {
      return [
        styles.navBarButtonAndroid,
        style,
      ]
    }
    return null
  }

  getTouchable(): React.Element {
    const { onPress, children } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.getNavBarButtonStyles()}>
          {children}
        </View>
      </TouchableOpacity>
    )
  }

  render(): React.Element {
    return this.getTouchable()
  }
}
