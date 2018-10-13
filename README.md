# EnabledUpdateIf

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