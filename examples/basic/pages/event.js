import { default as TreeRenderer, pathGet, pathMerge } from 'react-tree-renderer'

//define your own events | 自定义事件类型
export const eventTypes = {
  closeAll: 'closeAll',
  openAll: 'openAll'
}

class Template extends React.Component {

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
    treeEvent(isOpen ? eventTypes.openAll : eventTypes.closeAll, { data: 'example' })
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
        <ul style={{ display: data.isOpen ? 'block' : 'none' }}>
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
    console.log({ eventData, eventStr, path })
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
    return (<TreeRenderer Template={Template} data={root} onUpdateData={onUpdateData} onTreeEvent={onTreeEvent} />)
  }
}