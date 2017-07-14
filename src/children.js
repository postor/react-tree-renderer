export default ({
  TreeNode,
  data = {},
  onUpdateData,
  onTreeEvent,
  Template,
  path = '',
}) => {
  if (!data.children) {
    return []
  }

  const pathPrifix = path ? `${path}.` : ''

  return data.children.map((data, i) => {
    return (<TreeNode
      data={data}
      onUpdateData={onUpdateData}
      onTreeEvent={onTreeEvent}
      Template={Template}
      path={`${pathPrifix}children.${i}`}
    />)
  })
}