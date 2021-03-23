import Mock from 'mockjs' //引入mockjs，npm已安装
import {userList} from './userList'
Mock.setup({
  timeout:1000  //设置请求延时时间
})
const getdata = function(option){ //定义请求数据方法
  return{
    data:userList
  }
}

Mock.mock('/user', /post|get/i,getdata)
