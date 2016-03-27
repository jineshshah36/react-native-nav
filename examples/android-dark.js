import React, {
  Component,
  StyleSheet,
} from 'react-native'
import NavBar, {
  ButtonGroup,
  NavButton,
  NavButtonText,
  NavTitle,
} from 'react-native-nav'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#000',
  },
  navBar: {
    backgroundColor: '#212121',
  },
  title: {
    color: '#fff',
  },
  buttonText: {
    color: '#b5b5b5',
  },
})

export default class NavBarAndroidDark extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavTitle style={styles.title}>
          {"App"}
        </NavTitle>
        <ButtonGroup>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText style={styles.buttonText}>
              {"Button"}
            </NavButtonText>
          </NavButton>
        </ButtonGroup>
      </NavBar>
    )
  }
}
