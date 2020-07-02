class CusImage {
  static createAvatar(path) {
    const avatarDom = new Image()
    avatarDom.src = path
    avatarDom.classList.add('gb-avatar')
    const appDom = document.getElementById('app')
    appDom.appendChild(avatarDom)
  }
}

export default CusImage
