import React from 'react'

export default class DefaultTemplate extends React.Component {

  handleUpdateTitle(e) {
    const { data = {}, updateData, } = this.props
    const title = e.target.value

    updateData({
      ...data,
      title
    })
  }

  handleAddChild() {
    const { data = {}, updateData, } = this.props
    const { children = [] } = data

    updateData({
      ...data,
      children: [
        ...children,
        { title: 'new' },
      ]
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
        <button onClick={this.handleAddChild.bind(this)}>+</button>
      </div>
    )
  }
}