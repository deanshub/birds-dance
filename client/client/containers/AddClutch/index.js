import classnames from 'classnames'
import DatePicker from 'react-date-picker'
import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

import Styles from './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      clutchDate: new Date(),
      birds: 0,
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleBirdsChange = this.handleBirdsChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  onOpenModal() {
    this.setState({ open: true, clutchDate: new Date(), birds: 0 })
  }

  onCloseModal() {
    this.setState({ open: false })
  }

  handleDateChange(date) {
    this.setState({ clutchDate: date })
  }

  handleBirdsChange(e) {
    this.setState({ birds: e.target.value })
  }

  handleAddClick() {
    // TODO: call save API
    this.onCloseModal()
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal
            classNames={{ modal: classnames(Styles.AddClutchModal) }}
            onClose={this.onCloseModal}
            open={open}
        >
          <h2 className={classnames(Styles.Header)}>Add new clutch</h2>
          <div className={classnames(Styles.FormGroup)}>
            <label>Date: </label>
            <DatePicker
                className={classnames(Styles.FormControl, Styles.Calendar)}
                onChange={this.handleDateChange}
                value={this.state.clutchDate}
            />
          </div>
          <div className={classnames(Styles.FormGroup)}>
            <label># Birds: </label>
            <input
                className={classnames(Styles.FormControl, Styles.BirdsNumber)}
                onChange={this.handleBirdsChange}
                type="number"
                value={this.state.birds}
            />
          </div>
          ּ<button className={classnames(Styles.AddButton)} onClick={this.handleAddClick}>Add</button>
        </Modal>
      </div>
    )
  }
}