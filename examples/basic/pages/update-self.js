import React from 'react'
import TreeRenderer from 'react-tree-renderer'

class DefaultTemplate extends React.Component {

  //modify title | 修改title
  handleUpdateTitle(e) {
    // get updateData from props | 从props中获取updateData
    const { data = {}, updateData, } = this.props
    const title = e.target.value

    // and call updateData when you need | 并使用updateData方法更新对应节点的数据
    updateData({
      ...data,
      title
    })
  }

  render() {
    const { data = {}, children = [], } = this.props
    
    return (
      <div>
        <input value={data.title} onChange={this.handleUpdateTitle.bind(this)} />
        <ul>
          {children.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
        
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