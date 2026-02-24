import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Messages from './messages.jsx'
import App from './About.jsx'
import Map from './map.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Map /> */}
    <Messages />
  </StrictMode>,
)




// function EvenNO(){
//   return <h1> Number is even</h1>
// }
// function OddNO(){
//   return <h1> Number is Odd</h1>
// }

// function EvenOdd(props){
//   const num = props.num;
//   if(num % 2 === 0){
//     return <EvenNO />
//   }else{
//     return <OddNO />
//   }
// }