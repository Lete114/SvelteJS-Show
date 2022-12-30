export default function show(node: HTMLElement, bool: boolean)  {
  update(bool)
  function update(bool: boolean) {
    node.style.display = bool ? 'none' : ''
  }
  return { update }
}
