import classnames from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import style from './style.css'

export default class Bird extends Component {
  render() {
    const { bird, isClosed } = this.props

    if (isClosed) {
      return <div className={classnames(style.closedView)}>There is no chosen bird</div>
    }

    const { fatherId, motherId } = bird.parents || {}
    const prettyDate = moment(bird.dateOfBirth).format('MM/DD/YYYY')
    const age = moment(bird.dateOfBirth).toNow(true);

    return (
      <ul>
        <li><b>Name: </b>{bird.name}</li>
        <li><b>DoB: </b>{prettyDate} <b>Age:</b>({age})</li>
        <li><b>Gender: </b>{bird.gender}</li>
        <li><b>Species: </b>{bird.species}</li>
        <li><b>Owner: </b>{bird.owner}</li>
        <li><b>Cage: </b>{bird.cage}</li>
        <li><b>Parents: </b>{fatherId} {motherId}</li>
      </ul>
    )
  }
}

Bird.propTypes = {
  bird: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    dateOfBirth: PropTypes.number,
    gender: PropTypes.string,
    species: PropTypes.string,
    owner: PropTypes.string,
    cage: PropTypes.string,
    parents: PropTypes.shape({
      fatherId: PropTypes.string,
      motherId: PropTypes.string,
    }),
    children: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.string,
  }),
  isClosed: PropTypes.bool
}

