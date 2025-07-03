
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from './components/menu';

function App() {
let [data, setData] = useState([]);

let getData = ()=>{
  axios.get('https://dummyjson.com/products')
  .then((respose)=> {
    setData(respose.data.products);
})}
useEffect (() => {
 getData()
}, [])



  return (
    <>
    <Menu />
    <Container>
      <Row>
        
        {data.map((item)=>(
          <Col lg={4}>
          <>
          <h3>{item.title}</h3>
          <h1>{item.id}</h1>
          <p>{item.description}</p>
          <img src={item.thumbnail} alt="" srcset="" />
          </>
         </Col>
        )
        )}
       
      </Row>
    </Container>
    </>
  )
}

export default App
