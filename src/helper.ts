
export type TreeData = {
  [key: string]: any
  children?: TreeData[]
}

export type TreeDataUpdateFn =(fn: (old: TreeData) => TreeData) => void

export function pathMerge(obj: object, pathStr: string | undefined, toMerge: object) {
  if (!pathStr) return toMerge

  const pathArr = pathStr.split('.')
  // @ts-ignore
  const lastPath: string = pathArr.pop()
  const tobj = { ...obj }
  const lastBranch = pathArr.reduce((o: any, p: string) => {
    !o[p] && (o[p] = {})
    if (Array.isArray(o[p])) {
      o[p] = [...o[p]]
      return o[p]
    }
    o[p] = { ...o[p] }
    return o[p]
  }, tobj)
  lastBranch[lastPath] = toMerge
  return tobj
}

export function pathGet(obj: object, pathStr: string) {
  if (!pathStr) return obj

  const pathArr = pathStr.split('.')
  return pathArr.reduce((tmp: any, p) => {
    if (tmp === null) return null
    if (typeof tmp[p] === 'undefined') return null
    return tmp[p]
  }, obj)
}
