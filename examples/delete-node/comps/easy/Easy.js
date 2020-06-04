import React from 'react'

import TreeRenderer from 'react-tree-renderer'
import DefaultTemplate from './Template'

export default class TestTree extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      root: {
        title: 'root',
        children: [
          {
            title: 'test1',
          },
          {
            title: 'test2',
            children: [
              {
                title: 'test1',
              },
              {
                title: 'test2',
              },
              {
                title: 'test3',
              },
            ]
          },
          {
            title: 'test3',
          },
        ]
      }
    }
  }

  render() {
    const { root = {} } = this.state

    //pass onUpdateData to TreeRenderer to handle data change | 给TreeRenderer传递onUpdateData来处理数据变化
    return (<TreeRenderer Template={DefaultTemplate} data={root} onUpdateData={(root) => this.setState({ root, })} />)
  }
}