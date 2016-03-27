## A cross-platform (iOS / Android), fully customizable, React Native Navigation Bar component.

I created this project after going through the navbars contained in [Awesome React](https://github.com/jondot/awesome-react-native) and not finding any that were cross-platform, customizable, and integrated the status bar. This project is a spiritual successor to [react-native-navbar](https://github.com/react-native-fellowship/react-native-navbar) (I forked it and ended up changing like 90% of it).

![preview](https://github.com/jineshshah36/react-native-nav/blob/master/examples/assets/react-native-nav_preview.png)

### Content
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Examples](#examples)
- [Questions?](#questions)

### Installation
First of all, make sure you're using `npm3+` and `babel6` for version `1.1.1` or above.

```bash
npm install --save react-native-nav
```

### Getting started

Start a new [React Native Project](https://facebook.github.io/react-native/docs/getting-started.html#content). Then, `npm install --save react-native-nav`.

##### iOS

```javascript
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
```

##### Android

```javascript
import React, { Component } from 'react-native'
import NavBar, { ButtonGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

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
```

### API

Coming soon...

### Examples

To find a preview of all examples go to the [examples](https://github.com/jineshshah36/react-native-nav/tree/master/examples) folder.

  - [iOS Light](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-light.js)
  - [iOS Dark](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-dark.js)
  - [iOS Colored](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-colored.js)
  - [Android Light](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-light.js)
  - [Android Dark](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-dark.js)
  - [Android Colored](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-colored.js)

### Questions?

Feel free to contact me via

  - [Twitter](https://twitter.com/thjigs36)
  - [Medium](https://medium.com/@thejigs36)
  - [Github](https://github.com/jineshshah36)
