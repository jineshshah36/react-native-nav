## A cross-platform (iOS / Android), fully customizable, React Native Navigation Bar component.

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

##### ES6 (ES2015)

```javascript
import React, {
  Component,
} from 'react-native'
import NavBar, {
  NavButton,
  NavButtonText,
  NavTitle,
} from 'react-native-nav'

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

##### ES5

```javascript
var React = require('react-native');
var reactNativeNav = require('react-native-nav')
var NavBar = reactNativeNav.default
var NavButton = reactNativeNav.NavButton
var NavButtonText = reactNativeNav.NavButtonText
var NavTitle = reactNativeNav.NavTitle

module.exports = React.createClass({
  render: function() {
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
})
```

### API

Coming soon...

### Examples

  - [iOS Light](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-light.js)
  - [iOS Dark](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-dark.js)
  - [iOS Colored](https://github.com/jineshshah36/react-native-nav/tree/master/examples/ios-colored.js)
  - [Android Light](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-light.js)
  - [Android Dark](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-dark.js)
  - [Android Colored](https://github.com/jineshshah36/react-native-nav/tree/master/examples/android-colored.js)

### Questions?
Feel free to contact me via
- [Twitter](https://twitter.com/jineshshah36)
