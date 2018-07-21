import React, { Component } from 'react'
import Resizable from 're-resizable'
import classnames from 'classnames'
import style from './style.css'

const defaultHeight = '300px'
const defaultWidth = '500px'

export default class LayoutManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: defaultHeight,
      width: defaultWidth,
    }
  }

  onResize(size) {
    const newSize = {}
    let width = size.width
    let height = size.height
    if (size.width!==undefined) {
      if (size.width===this.state.width){
        if (parseFloat(size.width)<=20) {
          width = defaultWidth
        } else {
          width = '20px'
        }
      }
      newSize.width = width
    }
    if (size.height!==undefined) {
      if (size.height===this.state.height) {
        if (parseFloat(size.height)<=20) {
          height = defaultHeight
        } else {
          height = '20px'
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
            Bird Details
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
