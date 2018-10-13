import React from 'react'
import PropTypes from 'prop-types'

class EnabledUpdateIf extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.condition) {
      return true;
    }
    return false;
  }

  render() {
    const render = this.props.children || this.props.render

    return render()
  }
}

EnabledUpdateIf.propTypes = {
  children: PropTypes.func,
  render: PropTypes.func,
  condition: PropTypes.bool,
}

EnabledUpdateIf.defaultProps = {
  condition: true,
}

export default EnabledUpdateIf