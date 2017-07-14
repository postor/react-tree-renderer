/**
 * 按路径合入数据 
 * 
 * @param {any} obj 
 * @param {any} pathStr 
 * @param {any} toMerge 
 * @returns 
 */
export function pathMerge(obj, pathStr, toMerge) {
  if (!pathStr) return toMerge

  const pathArr = pathStr.split('.')
  const lastPath = pathArr.pop()
  const tobj = { ...obj }
  const lastBranch = pathArr.reduce((o, p) => {
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

/**
 * 
 * 按路径获取
 * 
 * @export
 * @param {any} obj 
 * @param {any} pathStr 
 * @returns 
 */
export function pathGet(obj, pathStr) {
  if(!pathStr) return obj
    
  const pathArr = pathStr.split('.')
  var tmp = obj
  return pathArr.reduce((tmp, p) => {
    if (tmp === null) return null
    if (typeof tmp[p] === 'undefined') return null
    return tmp[p]
  }, obj)
}