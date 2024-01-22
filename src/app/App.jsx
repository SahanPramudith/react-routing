import { useState,useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//import Button from "../Componot/Button/Button.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [data,setData]=useState('acpt')

  useEffect(()=>{
    console.log('hi')
  },data[data])



  const Clicx = () => {
    console.log('p')
  }


  return (
    <div>
    {/*  <h1>{data}</h1>*/}
    {/*<Button name={'button'} onClick={(val)=>{setData(val)}}/>*/}
    {/*  <br/>*/}
    {/*  <Button bgclor={"red"}  clor={'black'} name={'button1'} onClick={()=>{console.log('niyamai')}} />  <br/>*/}
    {/*  <Button bgclor={"green"}  clor={'black'} name={'button2'} onClick={()=>{console.log('niyamai')}} />  <br/>*/}
    {/*  <Text type={'password'} placeholder={"input name "} onChange={(val)=>{setData(val)}} />*/}
    {/*  <br/>*/}
    {/*  <Text/>*/}
    {/*  <br/>*/}
    {/*  <Dashbord/>*/}
    {/*  <br/>*/}
    {/*  <User/>*/}

        <Routes>
            <Route path={'*'} element={<Navigate to={'/dashbord'}/>}/>
            <Route path={'/dashbord'} element={<Dashbord/>} key={'dashbord'}/>
            <Route path={'/user'} element={<User/>} key={'user'} />
        </Routes>

    </div>
  )
}

export default App
