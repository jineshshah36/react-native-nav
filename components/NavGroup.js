import React from 'react-native'
const {
  View,
  Component,
  PropTypes,
} = React
import styles from '../styles'

export class NavGroup extends Component {
  static propTypes = {
    style: View.propTypes.style,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
  }

  render(): React.Element {
    const { style, children } = this.props
    return (
      <View style={[styles.navGroup, style]}>
        {children}
      </View>
    )
  }
}
