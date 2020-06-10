import React, { Component } from 'react'
import getChildren from './children'
import { TreeData, TreeDataUpdateFn } from './helper'

type Props = {
  data?: TreeData,
  path?: string,
  onUpdateData: (path: string | undefined, node: object) => void,
  Template: any,
  onTreeEvent: (eventStr: string, obj: object, path: string | undefined) => void,
  i?: number,
  onDelete: () => void,
  onUpdateParent: TreeDataUpdateFn,
}

class TreeNode extends Component<Props> {
  render() {
    const { data = {}, path, onUpdateData, onTreeEvent
      , Template, i, onDelete, onUpdateParent } = this.props
    const updateMyData = (
      (fn: (old: TreeData | undefined) => TreeData) =>
        this.updateData(fn(this.props.data))).bind(this)

    const children = getChildren({
      TreeNode,
      data,
      onUpdateData,
      onTreeEvent,
      Template,
      path,
      deleteChildAt: (i: number) => this.updateData({
        ...data,
        children: (data.children || []).filter((x: any, j) => i !== j)
      }),
      updateMyData,
    })

    return (<Template
      data={data}
      i={i}
      updateData={this.updateData.bind(this)}
      treeEvent={this.treeEvent.bind(this)}
      updateParent={onUpdateParent}
      children={children}
      deleteMe={onDelete}
      addChildren={(children: TreeData[]) => this.updateData({
        ...data,
        children: (data.children || []).concat(children)
      })}
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