import React, { Component } from 'react'
import Resizable from 're-resizable'
import classnames from 'classnames'
import style from './style.css'

import Bird from '../../components/Bird'

const DEFAULT_HEIGHT = '300px'
const DEFAULT_WIDTH = '500px'
const MIN_HEIGHT = 20
const MIN_WIDTH = 20

const mockBird = {
  id: 'id',
  name: 'myName',
  dateOfBirth: 1532232000000,
  gender: 'F',
  species: 'Zebra',
  owner: 'Mor',
  cage: 'M',
  parents: {
    fatherId: '123',
    motherId: '456',
  },
  children: [],
  notes: 'myNotes',
}

export default class LayoutManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: DEFAULT_HEIGHT,
      width: DEFAULT_WIDTH,
    }
  }

  onResize(size) {
    const newSize = {}
    let width = size.width
    let height = size.height
    if (size.width!==undefined) {
      if (size.width===this.state.width){
        if (parseFloat(size.width) <= MIN_WIDTH) {
          width = DEFAULT_WIDTH
        } else {
          width = `${MIN_WIDTH}px`
        }
      }
      newSize.width = width
    }
    if (size.height!==undefined) {
      if (size.height===this.state.height) {
        if (parseFloat(size.height) <= MIN_HEIGHT) {
          height = DEFAULT_HEIGHT
        } else {
          height = `${MIN_HEIGHT}px`
        }
      }
      newSize.height = height
    }
    this.setState(newSize)
  }

  render() {
    const {width, height} = this.state
    return (
      <div className={classnames(style.content)}>
        <div className={classnames(style.leftVertical)}>
          <div className={classnames(style.upperHorizontal)}>
            Cages Manager
          </div>
          <Resizable
              axis="y"
              className={classnames(style.resizable, style.birdDetails)}
              enable={{
                top: true,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
              onResizeStop={(e, direction, ref)=>this.onResize({height: ref.style.height})}
              size={{height}}
          >
            <Bird bird={mockBird} />
          </Resizable>
        </div>
        <Resizable
            axis="x"
            className={classnames(style.resizable, style.cageDetails)}
            enable={{
              top: false,
              right: false,
              bottom: false,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResizeStop={(e, direction, ref)=>this.onResize({width: ref.style.width})}
            size={{width}}
        >
          Cage Details
        </Resizable>
      </div>
    )
  }
}
