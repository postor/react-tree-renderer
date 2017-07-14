import React from 'react'

import { default as TreeRenderer, pathGet, pathMerge } from '../../src/index'
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

    return (<TreeRenderer Template={DefaultTemplate} data={root} onUpdateData={onUpdateData} onTreeEvent={onTreeEvent} />)

  }
}