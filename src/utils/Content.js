class Content{
  static append(tag, content, parentId, options) {
    const cDom = document.createElement(tag)
    cDom.innerText = content
    if (options && options.className) {
      cDom.classList.add(options.className)
    }
    const pDom = document.getElementById(parentId)
    pDom.appendChild(cDom)
  }
}

export default Content
