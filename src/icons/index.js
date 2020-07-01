import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon'

/* 注册全局组件 */
Vue.component('svg-icon', SvgIcon)

/* 
  About the use of node require.context(directory:string, useSubDirectory, regExp):
  directory: 读取文件的路径
  useSubDirectory: 是否遍历子文件目录
  regExp: 匹配文件的正则  
 */

const svgFiles = require.context('./svg', false, /\.svg$/)

console.log(svgFiles, 'svgFile')
