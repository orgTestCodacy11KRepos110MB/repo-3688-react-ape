# [React Ape](https://raphamorim.io/react-ape)

## [Check the Docs (raphamorim.io/react-ape)](https://raphamorim.io/react-ape)

### DISCLAIMER: In experimental stage

React Ape is a react renderer to build UI interfaces using canvas/WebGL. React Ape was built to be an optional [React-TV](https://github.com/raphamorim/react-tv) renderer. It's mainly a renderer focused on creating things for TV, PS5, PS4, Nintendo Switch, PS Vita, PS3 and low memory devices.

React Ape lets you build Canvas apps using React. React Ape uses the same design as React, letting you compose a rich UI from declarative components.

```jsx
import React, { Component } from 'react';
import { Text, View } from 'react-ape';

class ReactApeComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          Render this text on Canvas
        </Text>
        <Text>
          You just use React Ape components like 'View' and 'Text',
          just like React Native.
        </Text>
      </View>
    );
  }
}
```

## Demo on PS Vita

<img alt='Demo PS Vita' src='assets/demo-ps-vita.jpg' height='330px' />

## Testing it

React-Ape's CI uses `macos-latest` and since canvas renders a different output based on the operating system (node-canvas have rasterize fonts in different ways based on OS). It requires run the tests on the same OS. Please be aware that if you want to contribute using a different OS, make sure that you have [Docker](https://www.docker.com/) installed.

## Credits

A special thanks to [Raphael Eckhardt](https://github.com/Raphseck) for making the logo <3
