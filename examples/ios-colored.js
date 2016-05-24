import React, {Component} from 'react';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#68efad',
  },
  navBar: {
    backgroundColor: '#68efad',
  },
  title: {
    color: '#rgba(0, 0, 0, 0.65)',
  },
  buttonText: {
    color: '#rgba(0, 0, 0, 0.45)',
  },
})

export default class NavBarIOSColored extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavButton>
          <NavButtonText style={styles.buttonText}>
            {"Button"}
          </NavButtonText>
        </NavButton>
        <NavTitle style={styles.title}>
          {"App"}
        </NavTitle>
        <NavButton>
          <NavButtonText style={styles.buttonText}>
            {"Button"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }
}
