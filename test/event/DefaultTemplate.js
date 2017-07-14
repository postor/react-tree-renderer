import React from 'react'

export const eventTypes = {
  closeAll: 'closeAll',
  openAll: 'openAll'
}

export default class DefaultTemplate extends React.Component {

  handleOpen(isOpen) {
    const { data = {}, updateData, } = this.props

    updateData({
      ...data,
      isOpen,
    })
  }

  handleOpenAll(isOpen) {
    const { treeEvent } = this.props
    treeEvent(isOpen ? eventTypes.openAll : eventTypes.closeAll)
  }

  render() {
    const { data = {}, children = [], } = this.props
    const handleOpen = this.handleOpen.bind(this)
    const handleOpenAll = this.handleOpenAll.bind(this)

    const getControls = (isOpen) => {
      if (isOpen) {
        return (<em><span onClick={() => handleOpen(false)}>close</span> <span onClick={() => handleOpenAll(false)}>close all</span></em>)
      }
      return (<em><span onClick={() => handleOpen(true)}>open</span> <span onClick={() => handleOpenAll(true)}>open all</span></em>)
    }

    return (
      <div>
        <p>{data.title} {getControls(data.isOpen)}</p>
        <ul style={{ display:data.isOpen?'block':'none'}}>
          {children.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
      </div>
    )
  }
}