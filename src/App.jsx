
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
let [data, setData] = useState([]);

let getData = ()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((respose)=> {
    setData(respose.data);
})}
useEffect (() => {
 getData()
}, [])



  return (
    <>
    <Container>
      <Row>
        
        {data.map((item)=>(
          <Col lg={4}>
          <>
          <h3>{item.title}</h3>
          <h1>{item.id}</h1>
          <p>{item.body}</p>
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
