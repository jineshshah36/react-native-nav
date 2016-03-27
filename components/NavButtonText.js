import React from 'react-native'
const {
  Text,
  Component,
  PropTypes,
} = React
import styles from '../styles'

export class NavButtonText extends Component {
  static propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
  }

  render(): React.Element {
    const { style, children } = this.props
    return (
      <Text style={[styles.navBarButtonText, style]}>
        {children}
      </Text>
    )
  }
}
