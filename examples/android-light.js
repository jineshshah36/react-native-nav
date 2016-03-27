import React, {
  Component,
} from 'react-native'
import NavBar, {
  ButtonGroup,
  NavButton,
  NavButtonText,
  NavTitle,
} from 'react-native-nav'

export default class NavBarAndroidLight extends Component {
  render() {
    return (
      <NavBar>
        <NavTitle>
          {"App"}
        </NavTitle>
        <ButtonGroup>
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
        </ButtonGroup>
      </NavBar>
    )
  }
}
