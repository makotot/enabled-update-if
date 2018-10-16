# EnabledUpdateIf

[![npm version](https://img.shields.io/npm/v/enabled-update-if.svg?style=flat-square)](https://www.npmjs.com/package/enabled-update-if)
[![License](http://img.shields.io/npm/l/enabled-update-if.svg?style=flat-square)](https://github.com/makotot/enabled-update-if)

> Skip unnecessary rerendering with render props.

## Why?

`shouldComponentUpdate` in each components is hard to maintain. `<EnabledUpdateIf />` makes more obvious and readable when the component is able to update or not.

## Install

```sh
$ npm i enabled-update-if
```

## Usage

```js
import React from 'react'
import EnabledUpdateIf from 'enabled-update-if'

return (
  <App>
    <EnabledUpdateIf condition={ this.state.isModalHidden }>
      {
        () => (
          <MainContent>...</MainContent>
        )
      }
    </EnabledUpdateIf>
    <Modal isHidden={ this.state.isModalHidden } />
  </App>
)
```

If you want to stop update `<MainContent />` when modal is opened, wrap with `<EnabledUpdateIf />` with passing the state of modal visibility to `condition` prop.


## License

MIT