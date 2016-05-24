import React, {Component} from 'react';
import {Image} from 'react-native';
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
  navButton: {
    flex: 1,
  },
  image: {
    width: 30,
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
          <NavButton style={styles.navButton}>
            <Image style={styles.width}
              resizeMode={"contain"}
              source={require('./shared/static/new-interface_cart.png')}
            />
          </NavButton>
          <NavButton style={styles.navButton}>
            <Image style={styles.width}
              resizeMode={"contain"}
              source={require('./shared/static/new-interface_search.png')}
            />
          </NavButton>
        </NavGroup>
      </NavBar>
    )
  }
}
