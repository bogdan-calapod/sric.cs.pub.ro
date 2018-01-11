import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

/**
 * Tab selector display
 */
class TabBar extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.string
  }
  static defaultProps = {
    onChange: () => {},
    tabs: [],
    active: ''
  }

  onClick = e => this.props.onChange(e.target.textContent)

  getTabClass = value => {
    const { active } = this.props
    let className = 'tab'

    if (value === active) {
      className += ' active'
    }

    return className
  }

  get tabs () {
    const { tabs } = this.props
    return tabs.map((x, i) => (
      <div key={i} onClick={this.onClick} className={this.getTabClass(x)}>
        {x}
      </div>
    ))
  }

  render () {
    return (
      <div className='TabBar'>
        {this.tabs}
      </div>
    )
  }
}

export default TabBar
