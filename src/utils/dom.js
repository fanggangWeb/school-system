// 删除子节点
export function removeNode(el) {
  let childs = el.childNodes
  for (let i = childs.length - 1; i >= 0; i--) {
    el.removeChild(childs[i])
  }
}
