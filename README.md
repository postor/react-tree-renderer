# react-tree-renderer

A tree render component for react | react的树状渲染组件

I want some component to render a tree without considering how to nest them, just provide the Template for One tree node. So come this project

我希望在React中渲染一个任意的树形结构，而不需要去考虑如何去嵌套每个层级，只需要提供一个根节点的数据和一个渲染模板

With this you can easily customise a treeview, a json editor, or anything tree alike

通过这个树形结构渲染工具，你可以轻松实现一个treeview（层级菜单、文件夹结构等）或者JSON编辑器等

![screenshot](https://img.youtube.com/vi/P011GNWfDvs/0.jpg)
watch on youtube https://youtu.be/P011GNWfDvs

## usage | 使用

install | 安装

```
npm install react-tree-renderer --save

# or | 或

yarn add react-tree-renderer
```

### simply show | 简单显示

for details go to [examples/basic](./examples/basic)

```
import TreeRenderer from 'react-tree-renderer'

//data, use children to nest nodes | 要展示的数据，使用children属性来嵌套数据
const root = {
    title: 'root',
    children: [
        {
            title: 'test1',
            children: [
                {
                    title: 'test2',
                    children: [
                        {
                            title: 'test3',
                        },
                        {
                            title: 'test4',
                        }
                    ],
                },

            ],
        },
    ],
}

//template for one node | 对应一个节点的渲染模板
const Template = (props) => {
    //data from props, data is a node from the root, children is the templated views of data.children
    //从props获取data，data为root中的一个节点，children则是对应data.children经过模板转换的视图列表
    const { data = {}, children = [], } = props
    return (
        <div>
            <p>{data.title}</p>
            <ul>
                {children.map((x, i) => (<li key={i}>{x}</li>))}
            </ul>
        </div>
    )
}

//as a tree | 渲染整个树状结构
export default (props)=>(
  <TreeRenderer Template={Template} data={root} />
)

```
![example screenshot](./images/a-show.png)

### with data updating | 同时需要更新数据

in this example, you can modify the titles and add new nodes | 在这个例子中，演示了修改每个节点的title和增加新节点

```
import React from 'react'
import TreeRenderer from 'react-tree-renderer'

class DefaultTemplate extends React.Component {

  render() {
    const { data = {}, children = [], addChildren, updateData, deleteMe, isRoot } = this.props

    return (
      <div>
        <input value={data.title} onChange={e => updateData({
          ...data,
          title: e.target.value,
        })} />
        {!isRoot && <button onClick={() => deleteMe()}>x</button>}
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
```

![example screenshot](./images/a-update.png)

### with event | 使用事件

sometimes we have more things to do besides updating data of the corresponding node, but parent or sibling or the whole tree, then you can use event

有时候你不止需要更新对应节点的数据，可能是上层的同级别的或者整个树，这时候你可以用event

Template

```
import React from 'react'

//define your own events | 自定义事件类型
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
    //use treeEvent from props to fire an event | 使用props中的treeEvent来触发一个事件
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
```

container

```
import React from 'react'

import { default as TreeRenderer, pathGet, pathMerge } from 'react-tree-renderer'
import { default as DefaultTemplate, eventTypes } from './DefaultTemplate'

export default class TestTree extends React.Component {

  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      root: {
        title: 'root',
        children: [
          {
            title: 'test1',
            children: [
              {
                title: 'test11',
              },
              {
                title: 'test12', children: [
                  {
                    title: 'test1',
                    children: [
                      {
                        title: 'test11',
                      },
                      {
                        title: 'test12',
                      }
                    ],
                  },
                  {
                    title: 'test2',
                  }
                ],
              }
            ],
          },
          {
            title: 'test2',
          }
        ],
      }
    }
  }

  onUpdateData(root) {
    this.setState(
      { root, }
    )
  }

  onTreeEvent(eventStr, eventData, path) {
    const { root = {} } = this.state
    const obj = pathGet(root, path)

    const setOpenRecursive = (isOpen, obj) => {
      const { children = [] } = obj
      return {
        ...obj,
        isOpen,
        children: children.map(x => setOpenRecursive(isOpen, x))
      }
    }
    const updateState = (newObj) => {
      const newRoot = pathMerge(root, path, newObj)
      this.setState({
        root: newRoot,
      })
    }

    switch (eventStr) {
      case eventTypes.closeAll:
        updateState(setOpenRecursive(false, obj))
        break;
      case eventTypes.openAll:
        updateState(setOpenRecursive(true, obj))
        break;
      default:
        break;
    }
  }


  render() {
    const onUpdateData = this.onUpdateData.bind(this)
    const onTreeEvent = this.onTreeEvent.bind(this)
    const { root = {} } = this.state

    //pass onTreeEvent handle to TreeRenderer | 给TreeRenderer传递处理函数onTreeEvent
    return (<TreeRenderer Template={DefaultTemplate} data={root} onUpdateData={onUpdateData} onTreeEvent={onTreeEvent} />)
  }
}
```

![example screenshot](./images/a-event.png)
