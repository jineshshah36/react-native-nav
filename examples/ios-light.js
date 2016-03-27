import React, { Component } from 'react-native'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class NavBarIOSLight extends Component {
  render() {
    return (
      <NavBar>
        <NavButton>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
        <NavTitle>
          {"App"}
        </NavTitle>
        <NavButton>
          <NavButtonText>
            {"Button"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }
}
