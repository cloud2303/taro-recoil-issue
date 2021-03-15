import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {atom,useRecoilState} from 'recoil'
const text = atom({
  key:"text",
  default:[12,34]
})
export default function  Index(){
  const [textValue,setTextValue] = useRecoilState(text)
  function getChange(){
    // setTextValue([1,2,3,45,5,6])
    setTextValue([56,78])
  }
  return <View onClick={()=>{
    getChange()
  }}>{textValue}</View>
}
