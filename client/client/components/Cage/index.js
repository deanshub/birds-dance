import classnames from 'classnames'
import moment from 'moment';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import style from './style.css'

const orderBabiesByDate = babies => {
  return babies.reduce((prev, curr) => {
    const { dateOfBirth } = curr
    const amount = prev[dateOfBirth]
    if (amount) {
      prev[dateOfBirth] = amount + 1
      return prev
    }

    prev[dateOfBirth] = 1
    return prev
  }, {})
}

export default class Cage extends Component {
  render() {
    const { cage, isClosed } = this.props

    if (isClosed || !cage) {
      return <div className={classnames(style.closedView)}>There is no chosen cage</div>
    }

    const orderedBabies = orderBabiesByDate(cage.babies)

    return (
      <ul>
        <li><b>Id: </b>{cage.id}</li>
        <li>
          <b>Babies - ({cage.babies.length})</b>
          <table>
            <tbody>
              { Object.keys(orderedBabies).map(key => {
                return (
                  <tr key={key}>
                    <td>{moment(parseFloat(key)).format('MM/DD/YYYY')}</td>
                    <td>{orderedBabies[key]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </li>
        <li><b>Fledged - ({cage.fledged.length})</b></li>
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

