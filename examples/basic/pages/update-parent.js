
import TreeRenderer from 'react-tree-renderer'


class DefaultTemplate extends React.Component {

  render() {
    const { data = {}, children = [], updateParent } = this.props
    const { childrenClicked = 0 } = data
    return (
      <div>
        <button onClick={() => {
          updateParent(({ childrenClicked, ...other }) => ({
            ...other,
            childrenClicked: (childrenClicked || 0) + 1
          }))
        }}>{childrenClicked}</button>
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
        children: [
          {},
          {
            children: [{}, {}, {},]
          },
          {},
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