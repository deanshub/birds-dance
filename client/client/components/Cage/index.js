import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import style from './style.css'

export default class Cage extends Component {
  render() {
    const { cage, isClosed } = this.props

    if (isClosed || !cage) {
      return <div className={classnames(style.closedView)}>There is no chosen cage</div>
    }

    return (
      <ul>
        <li><b>Id: </b>{cage.id}</li>
      </ul>
    )
  }
}

Cage.propTypes = {
  cage: PropTypes.shape({
    id: PropTypes.string,
    babies: PropTypes.array,
    fledged: PropTypes.array,
    notes: PropTypes.string,
  }),
  isClosed: PropTypes.bool
}

