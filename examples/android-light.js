import React, { Component } from 'react-native'
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class NavBarAndroidLight extends Component {
  render() {
    return (
      <NavBar>
        <NavTitle>
          {"App"}
        </NavTitle>
        <NavGroup>
          <NavButton>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton>
          <NavButton>
            <NavButtonText>
              {"Button"}
            </NavButtonText>
          </NavButton>
        </NavGroup>
      </NavBar>
    )
  }
}
