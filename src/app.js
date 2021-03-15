import { useEffect } from 'react'
import './app.scss'
import Taro from '@tarojs/taro'
import {RecoilRoot} from 'recoil'
function App({children}){
useEffect(() => {
   if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init({
        env: "demo2303-3gqhuyih88c7f4b8"
      });
    }
    
}, [])
    return <RecoilRoot>{children}</RecoilRoot>
}
// class App extends Component {

//   componentDidMount () {}

//   componentDidShow () {}

//   componentDidHide () {}

//   componentDidCatchError () {}

//   // this.props.children 是将要会渲染的页面
//   render () {
//     return this.props.children
//   }
// }

export default App
