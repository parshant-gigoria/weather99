import React,  { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import {Button , Container , Form  ,Navbar , Row, Col, InputGroup  } from 'react-bootstrap';
import Page from './Page';
// import './index.css';



const FetchAndConditionallyUpdateState = () => {
  const search = useRef(null);
  // State for the array fetched from the API
  const [apiData, setApiData] = useState([]);
  const [city, setCity] = useState('london');

  // State for the array after applying a condition
  const [filteredData, setFilteredData] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e7704bc895b4a8d2dfd4a29d404285b6`; // Replace with your API endpoint


    axios.get(apiUrl)
      .then(response => {

        const newData = response.data?.list;
        

        setApiData(newData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [city]); 




  useEffect(() => {
       setFilteredData([]);
       apiData.map((item, index) => {
        if(index%8===0){ setFilteredData((pre) =>[...pre , item]);};
        return null;

        
    })
  }, [apiData]); 

  console.log(filteredData);


  function handleSubmit(e){
    e.preventDefault();
    console.log(search.current.value)
    const datass= search.current.value
    setCity(datass);
    console.log(city);
  }


  return (
    <div >
     <Navbar expand="eg" className="bg-primary">
      <Container fluid >
      <Navbar.Brand href="/">Wether99</Navbar.Brand>
      
      </Container>
     </Navbar>
     <div  class="p-1   " >
      
    
     <Row className='mx-5 mt-3'>
      
      <Col md="4"> 
      <p class="fs-2">
      {city}
      </p>
       </Col>
      <Col md={{ span:3, offset:5 }}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
          <InputGroup className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search..."
              className=" mr-sm-2"
              name='search '
              ref={search}
              defaultValue={city}
             
            />
            
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>

      </Col>
     </Row>
     <hr
   style={{
   background: "#424242",
   height: "2px",
   border: "none",
   marginLeft:"50px",
   marginRight:"50px"
   }}
/>
     
    <Page data={filteredData}/>
    </div>


    </div>
  );
};

export default FetchAndConditionallyUpdateState;
