import '@/styles/index.scss'
import Image from '@/utils/Image'
import Content from '@/utils/Content'
import avatar from '@/assets/images/avatar.jpg'

Content.append('h4', '我是插入的内容', 'app', {
  className: 'common-title'
})
Image.createAvatar(avatar)
