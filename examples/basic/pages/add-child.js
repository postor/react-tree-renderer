import React from 'react'
import TreeRenderer from 'react-tree-renderer'

class DefaultTemplate extends React.Component {

  render() {
    const { data = {}, children = [], addChildren } = this.props

    return (
      <div>
        <p>{data.title}</p>
        <ul>
          {children.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
        <button onClick={() => addChildren([{ title: 'newly added' }])}>+</button>
      </div>
    )
  }
}

export default class TestTree extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      root: {
        title: 'root',
        children: [
          {
            title: 'test1',
          }
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