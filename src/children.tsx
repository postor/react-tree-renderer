// @ts-nocheck
import React from 'react'

export default ({
  TreeNode,
  data = {},
  onUpdateData,
  onTreeEvent,
  Template,
  path = '',
  deleteChildAt,
  updateMyData,
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
      onDelete={() => deleteChildAt(i)}
      onUpdateParent={updateMyData}
      Template={Template}
      path={`${pathPrifix}children.${i}`}
    />)
  })
}