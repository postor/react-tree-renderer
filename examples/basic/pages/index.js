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
export default (props) => (
  <TreeRenderer Template={Template} data={root} />
)