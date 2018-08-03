import classnames from 'classnames'
import React, { Component } from 'react'
import Modal from 'react-responsive-modal'

import Styles from './style.css'

export default class AddFledged extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      birds: 0,
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.handleBirdsChange = this.handleBirdsChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  onOpenModal() {
    this.setState({ open: true, birds: 0 })
  }

  onCloseModal() {
    this.setState({ open: false })
  }

  handleBirdsChange(e) {
    this.setState({ birds: e.target.value })
  }

  handleAddClick() {
    // TODO: call save API
    this.onCloseModal()
  }

  render() {
    const { open, birds } = this.state
    return (
      <div>
        <button onClick={this.onOpenModal}>Add fledged</button>
        <Modal
            classNames={{ modal: classnames(Styles.AddFledgedModal), closeButton: classnames(Styles.CloseButton) }}
            onClose={this.onCloseModal}
            open={open}
        >
          <h2 className={classnames(Styles.Header)}>Add fledged</h2>
          <div className={classnames(Styles.FormGroup)}>
            <label># Birds: </label>
            <input
                className={classnames(Styles.FormControl, Styles.BirdsNumber)}
                min={0}
                onChange={this.handleBirdsChange}
                type="number"
                value={birds}
            />
          </div>
          <button
                className={classnames(Styles.AddButton)}
                disabled={!birds}
                onClick={this.handleAddClick}
            >Add
          </button>
        </Modal>
      </div>
    )
  }
}
