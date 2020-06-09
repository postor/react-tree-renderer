import React, { Component } from 'react'
import getChildren from './children'

type Props = {
  data?: object,
  path?: string,
  onUpdateData: (path: string|undefined, node: object) => void,
  Template: any,
  onTreeEvent: (eventStr: string, obj: object, path: string|undefined) => void,
}

class TreeNode extends Component<Props> {

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

  updateData(node: object) {
    const { path, onUpdateData } = this.props
    onUpdateData(path, node)
  }

  treeEvent(eventStr: string, obj: object) {
    const { path, onTreeEvent } = this.props
    onTreeEvent(eventStr, obj, path)
  }
}

export default TreeNode