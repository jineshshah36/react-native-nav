import React, { Component, Image } from 'react-native'
import NavBar, { NavGroup, NavButton, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#3343BD',
  },
  navBar: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#E7259C',
  },
  buttonText: {
    color: 'rgba(231, 37, 156, 0.5)',
  },
  navGroup: {
    justifyContent: 'flex-end',
  },
})

export default class NavBarAndroidColored extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavTitle style={styles.title}>
          {"App"}
        </NavTitle>
        <NavGroup style={styles.navGroup}>
          <NavButton style={{ flex: 1 }}>
            <Image style={{ width: 30 }}
              resizeMode={"contain"}
              source={require('./shared/static/new-interface_cart.png')}
            />
          </NavButton>
          <NavButton style={{ flex: 1 }}>
            <Image style={{ width: 30 }}
              resizeMode={"contain"}
              source={require('./shared/static/new-interface_search.png')}
            />
          </NavButton>
        </NavGroup>
      </NavBar>
    )
  }
}
