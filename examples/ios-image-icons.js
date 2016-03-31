import React, { Component, Image } from 'react-native'
import NavBar, { NavButton, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#fff',
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
  navButton: {
    flex: 1,
  },
  image: {
    width: 30,
  },
})

export default class NavBarIOSColored extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavButton style={styles.navButton}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('./shared/static/new-interface_cart.png')}
          />
        </NavButton>
        <NavTitle style={styles.title}>
          {"App"}
        </NavTitle>
        <NavButton style={styles.navButton}>
          <Image style={styles.image}
            resizeMode={"contain"}
            source={require('./shared/static/new-interface_search.png')}
          />
        </NavButton>
      </NavBar>
    )
  }
}
