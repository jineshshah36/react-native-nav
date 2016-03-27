import React from 'react-native'
const {
  View,
  Component,
  PropTypes,
} = React
import styles from '../styles'

export class ButtonGroup extends Component {
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
      <View style={[styles.buttonGroup, style]}>
        {children}
      </View>
    )
  }
}
