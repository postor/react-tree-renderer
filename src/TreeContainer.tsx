import React, { Component } from 'react'
import TreeNode from './TreeNode'
import { pathMerge } from './helper'

type Props = {
  onTreeEvent: (eventStr: string, eventData: object, path: string | undefined) => void
  data: object,
  Template: any,
  onUpdateData: (updated: object) => void
}


class TreeContainer extends Component<Props> {
  render() {
    const { data, Template, onTreeEvent } = this.props
    return (<TreeNode
      data={data}
      onUpdateData={this.onUpdateData.bind(this)}
      onTreeEvent={onTreeEvent}
      Template={Template}
    />)
  }

  onUpdateData(path: string | undefined, node: object) {
    const { data, onUpdateData } = this.props
    const result = pathMerge(data, path, node)
    onUpdateData(result)
  }
}



export default TreeContainer