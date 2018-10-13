import React from 'react'
import { mount, shallow } from 'enzyme'
import EnabledUpdateIf from './'

class App extends React.Component {
  state = {
    value: '',
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <EnabledUpdateIf condition={ this.props.condition }>
        {
          () => (
            <Child
              value={ this.state.value }
              onChange={ this.onChange }
            />
          )
        }
      </EnabledUpdateIf>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <input
        value={ this.props.value || '' }
        onChange={ this.props.onChange }
      />
    )
  }
}

function setup(props) {
  const wrapper = mount(
    <App { ...props } />
  )

  return {
    wrapper,
  }
}

test('render child element', () => {
  const { wrapper } = setup({})

  expect(wrapper.html()).toBe('<input value="">')
})

test('able to update props if condition prop is true', () => {
  const { wrapper } = setup({})

  wrapper.setState({ value: 'foo' })
  expect(wrapper.find(Child).prop('value')).toBe('foo')
})

test('disable to update props if condition prop is false', () => {
  const { wrapper } = setup({ condition: false })

  wrapper.setState({ value: 'foo' })
  expect(wrapper.find(Child).prop('value')).not.toBe('foo')
})
