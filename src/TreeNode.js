import React from 'react'
import getChildren from './children'

class TreeNode extends React.Component {

  render() {
    const { data = {}, path, onUpdateData, onTreeEvent, Template, } = this.props
    const children = getChildren({
      TreeNode,
      data,
      onUpdateData,
      onTreeEvent,
      Template,
      path,
    })
    return (<Template
      data={data}
      updateData={this.updateData.bind(this)}
      treeEvent={this.treeEvent.bind(this)}
      children={children}
    />)
  }

  updateData(node) {
    const { path, onUpdateData } = this.props
    onUpdateData(path, node)
  }

  treeEvent(eventStr, obj) {
    const { path, onTreeEvent } = this.props
    onTreeEvent(eventStr, obj, path)
  }
}



export default TreeNode