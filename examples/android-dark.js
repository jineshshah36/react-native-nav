import React, { Component } from 'react-native'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

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
        <NavGroup>
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
        </NavGroup>
      </NavBar>
    )
  }
}
