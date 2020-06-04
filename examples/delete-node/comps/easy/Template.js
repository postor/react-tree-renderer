import React from 'react'

export default function DefaultTemplate(
  { data = {}, children = [], updateData }) {
  return (
    <div>
      <b>{data.title} </b>
      <button onClick={() => updateData({
        ...data,
        deleted: true
      })}>del</button>
      <ul>
        {children.map((x, i) => data.children[i].deleted
          ? null
          : (<li key={i}>{x}</li>))}
      </ul>
    </div>
  )
}